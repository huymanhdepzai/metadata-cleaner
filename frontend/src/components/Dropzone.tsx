import { useEffect, useRef, useState, type DragEvent } from 'react';
import { ACCEPTED_TYPES, MAX_FILE_BYTES, MAX_FILES_PER_SESSION } from '../config/limits';
import { fmt, useT } from '../i18n';
import { useJobStore } from '../store/useJobStore';
import { msg } from '../types';
import { formatBytes } from '../utils/format';
import { Icon, Spinner } from './ui';

const ACCEPTED_EXTENSIONS = Object.values(ACCEPTED_TYPES).flat();
/** Thuộc tính accept của <input>: cả MIME lẫn đuôi tệp (Windows thường không gán MIME cho HEIC). */
const ACCEPT_ATTR = [...Object.keys(ACCEPTED_TYPES), ...ACCEPTED_EXTENSIONS].join(',');

/** Lọc sơ bộ theo MIME hoặc đuôi tệp; định dạng thật được kiểm tra bằng chữ ký tệp sau đó (services/validator). */
const isAccepted = (file: File) =>
  file.type in ACCEPTED_TYPES || ACCEPTED_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext));

const readEntries = (reader: FileSystemDirectoryReader) =>
  new Promise<FileSystemEntry[]>((resolve, reject) => reader.readEntries(resolve, reject));

/** Lấy mọi tệp trong một mục được thả vào, kể cả tệp nằm trong thư mục (đệ quy). */
async function collectEntry(entry: FileSystemEntry, out: File[]): Promise<void> {
  if (entry.isFile) {
    out.push(await new Promise<File>((resolve, reject) => (entry as FileSystemFileEntry).file(resolve, reject)));
  } else if (entry.isDirectory) {
    const reader = (entry as FileSystemDirectoryEntry).createReader();
    // readEntries trả về từng đợt (≤ 100 mục ở Chrome) → đọc tới khi hết.
    for (let batch = await readEntries(reader); batch.length > 0; batch = await readEntries(reader)) {
      for (const child of batch) await collectEntry(child, out);
    }
  }
}

/** Tệp được thả vào khung. DataTransfer chỉ đọc được trong lúc xử lý sự kiện → lấy entry/tệp ngay, đọc thư mục sau. */
function droppedFiles(dt: DataTransfer): Promise<File[]> {
  const files = Array.from(dt.files);
  const entries = Array.from(dt.items, (item) => (item.kind === 'file' ? item.webkitGetAsEntry() : null));
  if (!entries.some((e) => e?.isDirectory)) return Promise.resolve(files);
  const out: File[] = [];
  return entries.reduce((p, e) => p.then(() => (e ? collectEntry(e, out) : undefined)), Promise.resolve()).then(() => out);
}

const hasFiles = (e: DragEvent) => Array.from(e.dataTransfer.types).includes('Files');

export function Dropzone({ compact = false }: { compact?: boolean }) {
  const t = useT();
  const addFiles = useJobStore((s) => s.addFiles);
  const addRejections = useJobStore((s) => s.addRejections);
  const validating = useJobStore((s) => s.validating);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragDepth = useRef(0);
  const [isDragActive, setDragActive] = useState(false);

  const handleFiles = (files: File[]) => {
    const accepted = files.filter(isAccepted);
    const rejected = files.filter((f) => !isAccepted(f));
    if (rejected.length) addRejections(rejected.map((f) => ({ name: f.name, reason: msg('rejType') })));
    if (accepted.length) void addFiles(accepted);
  };

  // Thả tệp trượt ra ngoài khung không được làm trình duyệt mở tệp đó và rời khỏi trang.
  useEffect(() => {
    const prevent = (e: globalThis.DragEvent) => e.preventDefault();
    document.addEventListener('dragover', prevent);
    document.addEventListener('drop', prevent);
    return () => {
      document.removeEventListener('dragover', prevent);
      document.removeEventListener('drop', prevent);
    };
  }, []);

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth.current++;
    setDragActive(true);
  };
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };
  // dragenter/dragleave bắn cả khi di qua phần tử con → đếm độ sâu để không nháy trạng thái.
  const onDragLeave = () => {
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setDragActive(false);
  };
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragDepth.current = 0;
    setDragActive(false);
    void droppedFiles(e.dataTransfer).then(handleFiles);
  };

  return (
    // Bấm vào bất kỳ đâu trong khung đều mở hộp chọn ảnh. Phím Tab/Enter dùng nút bên trong để không có hai điểm
    // dừng focus lồng nhau; click vào nút lan lên khung nên chỉ mở hộp chọn một lần.
    <div
      role="presentation"
      onClick={() => inputRef.current?.click()}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative cursor-pointer rounded-2xl border-2 border-dashed text-center transition-colors ${
        compact ? 'px-6 py-6' : 'px-6 py-12 sm:py-14'
      } ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 bg-slate-50/50 hover:border-indigo-400'}`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={ACCEPT_ATTR}
        tabIndex={-1}
        className="hidden"
        aria-label={t.dropzone.inputLabel}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          handleFiles(Array.from(e.target.files ?? []));
          e.target.value = ''; // cho phép chọn lại đúng tệp đó lần sau
        }}
      />
      {!compact && (
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
          <Icon name="upload" className="h-7 w-7" />
        </div>
      )}
      <p className={`${compact ? '' : 'mt-4'} text-base font-semibold text-slate-900`}>
        {isDragActive ? t.dropzone.release : t.dropzone.drop}
      </p>
      <p className="mt-1 text-sm text-slate-500">{t.dropzone.or}</p>
      <button
        type="button"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
      >
        <Icon name="photo" className="h-4 w-4" /> {t.dropzone.choose}
      </button>
      <p className="mt-4 text-xs text-slate-500">
        {fmt(t.dropzone.limits, { size: formatBytes(MAX_FILE_BYTES), count: MAX_FILES_PER_SESSION })}
      </p>
      {validating > 0 && (
        <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
          <Spinner /> {fmt(t.dropzone.checking, { count: validating })}
        </p>
      )}
    </div>
  );
}
