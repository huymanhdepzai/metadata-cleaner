import { create } from './create';
import { getPoolSize, MAX_FILES_PER_SESSION, ZIP_FILENAME } from '../config/limits';
import { FORMAT_MIME } from '../core/formats';
import { buildZip, downloadBlob } from '../services/exporter';
import { validateFile } from '../services/validator';
import { CancelledError, WorkerPool } from '../services/workerPool';
import { msg, type Job, type Msg, type Rejection, type StripOptions } from '../types';

/**
 * Chính sách giữ lại cố định: dữ liệu hiển thị (kích thước, hướng xoay, thông tin màu, dữ liệu ảnh,
 * hoạt ảnh) luôn được giữ — không cho phép tắt để kết quả luôn hiển thị đúng như ảnh gốc.
 */
export const RETENTION_POLICY: StripOptions = {
  keepIccProfile: true,
  keepOrientation: true,
};

let pool: WorkerPool | null = null;
const getPool = () => (pool ??= new WorkerPool(getPoolSize()));

/** Job đã được giao cho Worker Pool (đang chờ worker hoặc đang chạy). */
const dispatched = new Set<string>();

let seq = 0;
const newId = () => `${Date.now().toString(36)}-${(seq++).toString(36)}`;

const errorMessage = (err: unknown) => (err instanceof Error ? err.message : String(err));

interface JobState {
  jobs: Job[];
  rejections: Rejection[];
  validating: number;
  zipProgress: number | null;

  addFiles(files: File[]): Promise<void>;
  addRejections(items: { name: string; reason: Msg }[]): void;
  dismissRejection(id: string): void;
  clearRejections(): void;
  stripAll(): void;
  stripOne(id: string): void;
  retry(id: string): void;
  removeJob(id: string): void;
  clearAll(): void;
  downloadOne(id: string): void;
  downloadZip(): Promise<void>;
}

export const useJobStore = create<JobState>()((set, get) => {
  const patchJob = (id: string, patch: Partial<Job>) =>
    set((s) => ({ jobs: s.jobs.map((j) => (j.id === id ? { ...j, ...patch } : j)) }));

  /** Bước 1: phân tích metadata ngay khi ảnh được thêm vào. */
  const analyze = (job: Job) => {
    if (dispatched.has(job.id)) return;
    dispatched.add(job.id);
    getPool()
      .run({ kind: 'analyze', jobId: job.id, file: job.file, format: job.format })
      .then((res) => {
        if (res.kind === 'analyze') patchJob(job.id, { status: 'pending', report: res.report, error: undefined });
      })
      .catch((err: unknown) => {
        if (!(err instanceof CancelledError)) patchJob(job.id, { status: 'failed', error: errorMessage(err) });
      })
      .finally(() => dispatched.delete(job.id));
  };

  const strip = (ids: Set<string> | null) => {
    for (const job of get().jobs) {
      if (job.status !== 'pending' || dispatched.has(job.id) || (ids && !ids.has(job.id))) continue;
      dispatched.add(job.id);
      getPool()
        .run({ kind: 'strip', jobId: job.id, file: job.file, format: job.format, options: RETENTION_POLICY }, () =>
          patchJob(job.id, { status: 'processing' }),
        )
        .then((res) => {
          if (res.kind !== 'strip') return;
          patchJob(job.id, {
            status: 'completed',
            // Blob Assembler: đóng gói lại với MIME type ban đầu.
            result: new Blob([res.buffer], { type: job.mime }),
            outputSize: res.buffer.byteLength,
            removed: res.removed,
            after: res.after,
            error: undefined,
          });
        })
        .catch((err: unknown) => {
          if (!(err instanceof CancelledError)) patchJob(job.id, { status: 'failed', error: errorMessage(err) });
        })
        .finally(() => dispatched.delete(job.id));
    }
  };

  const resetForStrip = (ids: Set<string>) => {
    set((s) => ({
      jobs: s.jobs.map((j) =>
        ids.has(j.id) && !dispatched.has(j.id)
          ? { ...j, status: 'pending', result: undefined, outputSize: undefined, removed: undefined, after: undefined, error: undefined }
          : j,
      ),
    }));
    strip(ids);
  };

  return {
    jobs: [],
    rejections: [],
    validating: 0,
    zipProgress: null,

    async addFiles(files) {
      const free = MAX_FILES_PER_SESSION - get().jobs.length - get().validating;
      const accepted = files.slice(0, Math.max(0, free));
      const overflow = files.slice(accepted.length);
      if (overflow.length) {
        get().addRejections(
          overflow.map((f) => ({ name: f.name, reason: msg('rejOverflow', { count: MAX_FILES_PER_SESSION }) })),
        );
      }

      set((s) => ({ validating: s.validating + accepted.length }));
      for (const file of accepted) {
        const v = await validateFile(file);
        if (v.ok) {
          const job: Job = {
            id: newId(),
            file,
            name: file.name,
            size: file.size,
            format: v.format,
            mime: file.type || FORMAT_MIME[v.format],
            width: v.width,
            height: v.height,
            status: 'analyzing',
          };
          set((s) => ({ jobs: [...s.jobs, job], validating: s.validating - 1 }));
          analyze(job);
        } else {
          set((s) => ({
            rejections: [...s.rejections, { id: newId(), name: file.name, reason: v.reason }],
            validating: s.validating - 1,
          }));
        }
      }
    },

    addRejections(items) {
      set((s) => ({ rejections: [...s.rejections, ...items.map((r) => ({ id: newId(), ...r }))] }));
    },

    dismissRejection(id) {
      set((s) => ({ rejections: s.rejections.filter((r) => r.id !== id) }));
    },

    clearRejections() {
      set({ rejections: [] });
    },

    stripAll() {
      strip(null);
    },

    stripOne(id) {
      strip(new Set([id]));
    },

    retry(id) {
      const job = get().jobs.find((j) => j.id === id);
      if (!job || job.status !== 'failed') return;
      if (job.report) {
        resetForStrip(new Set([id]));
      } else {
        patchJob(id, { status: 'analyzing', error: undefined });
        analyze(job);
      }
    },

    removeJob(id) {
      pool?.cancel(id);
      set((s) => ({ jobs: s.jobs.filter((j) => j.id !== id) }));
    },

    clearAll() {
      pool?.cancelAll();
      set({ jobs: [], rejections: [], zipProgress: null });
    },

    downloadOne(id) {
      const job = get().jobs.find((j) => j.id === id);
      if (job?.result) downloadBlob(job.result, job.name);
    },

    async downloadZip() {
      const done = get().jobs.filter((j) => j.status === 'completed' && j.result);
      if (done.length === 0 || get().zipProgress !== null) return;
      set({ zipProgress: 0 });
      try {
        const zip = await buildZip(
          done.map((j) => ({ name: j.name, blob: j.result! })),
          (percent) => set({ zipProgress: percent }),
        );
        downloadBlob(zip, ZIP_FILENAME);
      } finally {
        set({ zipProgress: null });
      }
    },
  };
});
