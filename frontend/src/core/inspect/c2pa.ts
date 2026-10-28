import { clean, decode } from './text';

export interface C2paInfo {
  generator?: string;
  aiSourceType?: string;
  actions: string[];
}

/**
 * Đọc một chuỗi CBOR (major type 3) bắt đầu tại `pos`: header 0x60–0x77 mang độ dài trực tiếp,
 * 0x78 / 0x79 mang độ dài 1 / 2 byte tiếp theo.
 */
function readCborText(b: Uint8Array, pos: number): string | null {
  const h = b[pos];
  let len: number;
  let start: number;
  if (h >= 0x60 && h <= 0x77) {
    len = h - 0x60;
    start = pos + 1;
  } else if (h === 0x78) {
    len = b[pos + 1];
    start = pos + 2;
  } else if (h === 0x79) {
    len = (b[pos + 1] << 8) | b[pos + 2];
    start = pos + 3;
  } else {
    return null;
  }
  if (len === 0 || start + len > b.length) return null;
  return clean(decode(b.subarray(start, start + len)), 200) || null;
}

/** Giá trị chuỗi CBOR ngay sau khóa `key` (khóa cũng là chuỗi CBOR nên giá trị nằm liền kề). */
function valueAfterKey(b: Uint8Array, text: string, key: string, from = 0): string | null {
  let idx = text.indexOf(key, from);
  while (idx >= 0) {
    const value = readCborText(b, idx + key.length);
    if (value) return value;
    idx = text.indexOf(key, idx + key.length);
  }
  return null;
}

/**
 * Manifest C2PA (JUMBF + CBOR, có chữ ký số). Không xác thực chữ ký — chỉ đọc các chuỗi
 * để cho người dùng biết công cụ tạo (claim generator), hành động và khai báo nguồn AI.
 */
export function inspectC2pa(payload: Uint8Array): C2paInfo {
  const text = decode(payload, 'latin1');
  const info: C2paInfo = { actions: [] };

  // C2PA 1.x: "claim_generator": "<chuỗi>";  C2PA 2.x: "claim_generator_info": [{ "name": "<chuỗi>" }]
  const v2 = text.indexOf('claim_generator_info');
  info.generator =
    (v2 >= 0 ? valueAfterKey(payload, text, 'name', v2) : null) ?? valueAfterKey(payload, text, 'claim_generator') ?? undefined;

  const src = /(compositeWithTrainedAlgorithmicMedia|trainedAlgorithmicMedia|algorithmicMedia)/.exec(text);
  if (src) info.aiSourceType = src[1];

  const actions = new Set<string>();
  for (const m of text.matchAll(/c2pa\.(created|edited|opened|placed|converted|color_adjustments|resized|cropped|drawing|filtered|orientation|published|transcoded|repackaged|removed)\b/g)) {
    actions.add(m[0]);
  }
  info.actions = [...actions];
  return info;
}
