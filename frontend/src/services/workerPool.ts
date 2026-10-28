import type { WorkerRequest, WorkerResponse, WorkerSuccess } from '../types';

export class CancelledError extends Error {
  constructor() {
    super('Cancelled');
    this.name = 'CancelledError';
  }
}

interface Task {
  request: WorkerRequest;
  onStart?: () => void;
  resolve: (result: WorkerSuccess) => void;
  reject: (error: Error) => void;
}

/**
 * Worker Pool Controller: giữ một số Web Worker cố định; worker nào rảnh sẽ tự nhận file
 * tiếp theo trong hàng đợi, nên Main Thread (UI) không bao giờ phải parse byte.
 */
export class WorkerPool {
  private idle: Worker[] = [];
  private busy = new Map<Worker, Task>();
  private queue: Task[] = [];

  constructor(readonly size: number) {
    for (let i = 0; i < size; i++) this.idle.push(this.spawn());
  }

  run(request: WorkerRequest, onStart?: () => void): Promise<WorkerSuccess> {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, onStart, resolve, reject });
      this.pump();
    });
  }

  /** Bỏ một job còn đang chờ trong hàng đợi (job đang chạy sẽ chạy nốt và bị bỏ qua kết quả). */
  cancel(jobId: string): void {
    const index = this.queue.findIndex((t) => t.request.jobId === jobId);
    if (index >= 0) this.queue.splice(index, 1)[0].reject(new CancelledError());
  }

  cancelAll(): void {
    for (const task of this.queue.splice(0)) task.reject(new CancelledError());
  }

  private spawn(): Worker {
    const worker = new Worker(new URL('../workers/parser.worker.ts', import.meta.url), { type: 'module' });
    worker.onmessage = (event: MessageEvent<WorkerResponse>) => this.settle(worker, event.data);
    worker.onerror = (event) => {
      event.preventDefault();
      this.replaceCrashed(worker, event.message || 'Unknown Web Worker error');
    };
    return worker;
  }

  private pump(): void {
    while (this.idle.length > 0 && this.queue.length > 0) {
      const worker = this.idle.pop()!;
      const task = this.queue.shift()!;
      this.busy.set(worker, task);
      task.onStart?.();
      worker.postMessage(task.request);
    }
  }

  private settle(worker: Worker, response: WorkerResponse): void {
    const task = this.busy.get(worker);
    this.busy.delete(worker);
    this.idle.push(worker);
    if (task) {
      if (response.ok) task.resolve(response);
      else task.reject(new Error(response.error));
    }
    this.pump();
  }

  private replaceCrashed(worker: Worker, message: string): void {
    const task = this.busy.get(worker);
    this.busy.delete(worker);
    worker.terminate();
    this.idle.push(this.spawn());
    task?.reject(new Error(message));
    this.pump();
  }
}
