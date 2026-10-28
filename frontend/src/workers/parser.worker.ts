import { analyzeImage } from '../core/inspect/analyze';
import { stripMetadata } from '../core/strippers';
import type { WorkerRequest, WorkerResponse } from '../types';

const ctx = self as unknown as {
  onmessage: ((event: MessageEvent<WorkerRequest>) => void) | null;
  postMessage(message: WorkerResponse, transfer?: Transferable[]): void;
};

ctx.onmessage = async (event) => {
  const req = event.data;
  try {
    // Worker tự đọc File → ArrayBuffer, nên Main Thread không phải giữ bản sao byte nào.
    const input = new Uint8Array(await req.file.arrayBuffer());

    if (req.kind === 'analyze') {
      const report = await analyzeImage(input, req.format);
      ctx.postMessage({ kind: 'analyze', jobId: req.jobId, ok: true, report });
      return;
    }

    const { data, removed } = stripMetadata(input, req.format, req.options);
    // Phân tích lại tệp đầu ra để xác minh metadata đã thực sự bị gỡ.
    const after = await analyzeImage(data, req.format);
    const ownsBuffer = data.byteOffset === 0 && data.byteLength === data.buffer.byteLength;
    const buffer = (ownsBuffer ? data.buffer : data.slice().buffer) as ArrayBuffer;
    // Transferable: chuyển quyền sở hữu buffer về Main Thread, không sao chép.
    ctx.postMessage({ kind: 'strip', jobId: req.jobId, ok: true, buffer, removed, after }, [buffer]);
  } catch (err) {
    ctx.postMessage({ jobId: req.jobId, ok: false, error: err instanceof Error ? err.message : String(err) });
  }
};
