const decoders = new Map<string, TextDecoder>();

export function decode(bytes: Uint8Array, encoding: 'utf-8' | 'utf-16le' | 'utf-16be' | 'latin1' = 'utf-8'): string {
  let d = decoders.get(encoding);
  if (!d) decoders.set(encoding, (d = new TextDecoder(encoding)));
  return d.decode(bytes);
}

/** Làm sạch giá trị để hiển thị: bỏ ký tự NUL/điều khiển, cắt bớt chuỗi quá dài. */
export function clean(value: string, max = 4000): string {
  // eslint-disable-next-line no-control-regex
  const s = value.replace(/\u0000+$/g, '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim();
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

/** Tỷ lệ ký tự in được — để phân biệt chuỗi văn bản với dữ liệu nhị phân. */
export function isMostlyPrintable(bytes: Uint8Array): boolean {
  if (bytes.length === 0) return false;
  let printable = 0;
  for (const b of bytes) if ((b >= 0x20 && b < 0x7f) || b === 0x0a || b === 0x0d || b === 0x09 || b >= 0xc0) printable++;
  return printable / bytes.length > 0.9;
}

/** Giải nén zlib (PNG zTXt/iTXt/iCCP) bằng DecompressionStream có sẵn trong trình duyệt. */
export async function inflate(data: Uint8Array): Promise<Uint8Array | null> {
  if (typeof DecompressionStream === 'undefined') return null;
  try {
    const stream = new Blob([data as Uint8Array<ArrayBuffer>]).stream().pipeThrough(new DecompressionStream('deflate'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    return null;
  }
}
