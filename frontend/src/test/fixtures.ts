import { concat } from '../core/bytes';

/** Trình dựng tệp ảnh tổng hợp từng byte cho unit test. */

export const enc = (s: string) => new TextEncoder().encode(s);
export const bytes = (...parts: (number[] | string | Uint8Array)[]) =>
  concat(parts.map((p) => (typeof p === 'string' ? enc(p) : new Uint8Array(p))));
export const be16 = (v: number) => [v >> 8, v & 0xff];
export const be32 = (v: number) => [(v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff];
export const le32 = (v: number) => [v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff];

/** Chuỗi có xuất hiện ở bất kỳ đâu trong tệp không (kể cả giữa dữ liệu nhị phân). */
export const containsText = (hay: Uint8Array, needle: string) => new TextDecoder('latin1').decode(hay).includes(needle);

// ---------- TIFF / EXIF ----------

export interface TiffEntry {
  tag: number;
  type: number;
  count: number;
  data: number[];
}

export const asciiEntry = (tag: number, s: string): TiffEntry => ({ tag, type: 2, count: s.length + 1, data: [...enc(s), 0] });
export const shortEntry = (tag: number, v: number): TiffEntry => ({ tag, type: 3, count: 1, data: be16(v) });
export const rationals = (tag: number, pairs: [number, number][]): TiffEntry => ({
  tag,
  type: 5,
  count: pairs.length,
  data: pairs.flatMap(([n, d]) => [...be32(n), ...be32(d)]),
});

/** TIFF big-endian: IFD0 → Exif IFD + GPS IFD (con trỏ thêm tự động). */
export function buildTiff(ifd0: TiffEntry[], exif: TiffEntry[], gps: TiffEntry[]): Uint8Array {
  const ifdSize = (n: number) => 2 + n * 12 + 4;
  const ifd0Entries = [...ifd0, { tag: 0x8769, type: 4, count: 1, data: [] as number[] }, { tag: 0x8825, type: 4, count: 1, data: [] as number[] }];
  const exifAt = 8 + ifdSize(ifd0Entries.length);
  const gpsAt = exifAt + ifdSize(exif.length);
  let dataAt = gpsAt + ifdSize(gps.length);
  ifd0Entries[ifd0Entries.length - 2].data = be32(exifAt);
  ifd0Entries[ifd0Entries.length - 1].data = be32(gpsAt);

  const extra: number[] = [];
  const writeIfd = (entries: TiffEntry[]) => {
    const out = [...be16(entries.length)];
    for (const e of entries) {
      out.push(...be16(e.tag), ...be16(e.type), ...be32(e.count));
      if (e.data.length <= 4) out.push(...e.data, ...new Array(4 - e.data.length).fill(0));
      else {
        out.push(...be32(dataAt));
        extra.push(...e.data);
        if (e.data.length & 1) extra.push(0);
        dataAt += e.data.length + (e.data.length & 1);
      }
    }
    out.push(...be32(0));
    return out;
  };
  const body = [...writeIfd(ifd0Entries), ...writeIfd(exif), ...writeIfd(gps)];
  return new Uint8Array([0x4d, 0x4d, 0, 0x2a, ...be32(8), ...body, ...extra]);
}

/** EXIF đầy đủ: vị trí, ngày giờ, máy ảnh, tác giả, phần mềm, hướng xoay. */
export function fullExifTiff(orientation: number): Uint8Array {
  return buildTiff(
    [
      asciiEntry(0x010e, 'Caption: Ho Guom'),
      asciiEntry(0x010f, 'Apple'),
      asciiEntry(0x0110, 'iPhone 15 Pro'),
      shortEntry(0x0112, orientation),
      asciiEntry(0x0131, 'Adobe Firefly'),
      asciiEntry(0x0132, '2026:10:02 09:00:00'),
      asciiEntry(0x013b, 'Nguyen Van A'),
      asciiEntry(0x8298, 'Copyright Nguyen Van A'),
    ],
    [
      rationals(0x829a, [[1, 120]]),
      rationals(0x829d, [[18, 10]]),
      shortEntry(0x8827, 100),
      asciiEntry(0x9003, '2026:10:01 08:30:00'),
      asciiEntry(0xa434, 'iPhone 15 Pro back camera'),
    ],
    [
      asciiEntry(0x01, 'N'),
      rationals(0x02, [[21, 1], [1, 1], [4140, 100]]),
      asciiEntry(0x03, 'E'),
      rationals(0x04, [[105, 1], [51, 1], [0, 1]]),
      rationals(0x06, [[1250, 100]]),
    ],
  );
}

/** XMP có tác giả, lịch sử chỉnh sửa, vị trí, nhãn nguồn AI và trình tạo. */
export const FULL_XMP = `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xmp="http://ns.adobe.com/xap/1.0/"
 xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"
 xmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#"
 xmp:CreatorTool="Adobe Firefly Image 3" xmp:CreateDate="2026-10-01T08:30:00" photoshop:City="Ha Noi"
 Iptc4xmpExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia">
<dc:creator><rdf:Seq><rdf:li>Nguyen Van A</rdf:li></rdf:Seq></dc:creator>
<xmpMM:History><rdf:Seq><rdf:li stEvt:action="edited" stEvt:softwareAgent="Photoshop 26"/></rdf:Seq></xmpMM:History>
</rdf:Description></rdf:RDF></x:xmpmeta>`;

/** Manifest C2PA rút gọn: vùng chứa JUMBF, loại nguồn, thao tác, trình tạo, mô hình, bên ký. */
export function c2paManifest(): Uint8Array {
  const gen = 'Adobe Firefly c2pa-rs/0.31';
  return bytes(
    'jumbc2pa', 'c2pa.claim', [0x6f], 'claim_generator', [0x60 + gen.length], gen,
    'c2pa.actions c2pa.created digitalSourceType trainedAlgorithmicMedia',
    'model: firefly-image-3', 'Signer: Adobe Inc. C2PA Signing Cert',
  );
}
