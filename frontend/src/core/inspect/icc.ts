import { ascii, u32be } from '../bytes';
import { clean, decode } from './text';

/** Tên mô tả của ICC Profile (tag `desc`, kiểu `desc` v2 hoặc `mluc` v4). */
export function iccDescription(icc: Uint8Array): string | null {
  if (icc.length < 132) return null;
  const count = u32be(icc, 128);
  for (let i = 0; i < Math.min(count, 100); i++) {
    const e = 132 + i * 12;
    if (e + 12 > icc.length) break;
    if (ascii(icc, e, 4) !== 'desc') continue;
    const off = u32be(icc, e + 4);
    const size = u32be(icc, e + 8);
    if (off + size > icc.length || size < 12) return null;
    const type = ascii(icc, off, 4);
    if (type === 'desc') {
      const n = u32be(icc, off + 8);
      return clean(decode(icc.subarray(off + 12, off + 12 + n), 'latin1')) || null;
    }
    if (type === 'mluc' && size >= 28) {
      const len = u32be(icc, off + 20);
      const strOff = u32be(icc, off + 24);
      return clean(decode(icc.subarray(off + strOff, off + strOff + len), 'utf-16be')) || null;
    }
    return null;
  }
  return null;
}

export function iccColorSpace(icc: Uint8Array): string | null {
  return icc.length >= 20 ? ascii(icc, 16, 4).trim() : null;
}
