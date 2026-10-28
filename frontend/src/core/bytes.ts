export class ParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParseError';
  }
}

export function ascii(b: Uint8Array, off: number, len: number): string {
  let s = '';
  const end = Math.min(b.length, off + len);
  for (let i = off; i < end; i++) s += String.fromCharCode(b[i]);
  return s;
}

/** Đọc chuỗi kết thúc bằng NUL; `next` là vị trí ngay sau byte NUL. */
export function cString(b: Uint8Array, off: number, max: number): { value: string; next: number } {
  const limit = Math.min(b.length, off + Math.max(0, max));
  let end = off;
  while (end < limit && b[end] !== 0) end++;
  return { value: ascii(b, off, end - off), next: end + 1 };
}

export function matches(b: Uint8Array, off: number, sig: string | ArrayLike<number>): boolean {
  if (off + sig.length > b.length) return false;
  for (let i = 0; i < sig.length; i++) {
    const expected = typeof sig === 'string' ? sig.charCodeAt(i) : sig[i];
    if (b[off + i] !== expected) return false;
  }
  return true;
}

export const u16be = (b: Uint8Array, o: number) => (b[o] << 8) | b[o + 1];
export const u32be = (b: Uint8Array, o: number) =>
  b[o] * 0x1000000 + ((b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]);
export const u16le = (b: Uint8Array, o: number) => b[o] | (b[o + 1] << 8);
export const u24le = (b: Uint8Array, o: number) => b[o] | (b[o + 1] << 8) | (b[o + 2] << 16);
export const u32le = (b: Uint8Array, o: number) =>
  (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16)) + b[o + 3] * 0x1000000;

/** Số nguyên big-endian độ dài n byte (0, 2, 4 hoặc 8) — dùng cho các trường kích thước biến đổi của ISOBMFF. */
export function uintBE(b: Uint8Array, o: number, n: number): number {
  let v = 0;
  for (let i = 0; i < n; i++) v = v * 256 + b[o + i];
  return v;
}

export function writeU32le(b: Uint8Array, o: number, v: number): void {
  b[o] = v & 0xff;
  b[o + 1] = (v >>> 8) & 0xff;
  b[o + 2] = (v >>> 16) & 0xff;
  b[o + 3] = (v >>> 24) & 0xff;
}

export function concat(parts: Uint8Array[]): Uint8Array {
  let total = 0;
  for (const p of parts) total += p.length;
  const out = new Uint8Array(total);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

/** CRC-32 (ISO 3309) — dùng cho chunk PNG được tạo mới. */
export function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (const b of data) crc = CRC_TABLE[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

export function toHex(b: Uint8Array): string {
  let s = '';
  for (const x of b) s += x.toString(16).padStart(2, '0');
  return s;
}
