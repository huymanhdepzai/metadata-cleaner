export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function uniqueNames(names: string[]): string[] {
  const used = new Set<string>();
  return names.map((name) => {
    const dot = name.lastIndexOf('.');
    const stem = dot > 0 ? name.slice(0, dot) : name;
    const ext = dot > 0 ? name.slice(dot) : '';
    let candidate = name;
    for (let i = 1; used.has(candidate.toLowerCase()); i++) candidate = `${stem} (${i})${ext}`;
    used.add(candidate.toLowerCase());
    return candidate;
  });
}


export async function buildZip(
  entries: { name: string; blob: Blob }[],
  onProgress: (percent: number) => void,
): Promise<Blob> {
  const { default: JSZip } = await import('jszip');
  const zip = new JSZip();
  const names = uniqueNames(entries.map((e) => e.name));
  entries.forEach((entry, i) => zip.file(names[i], entry.blob, { binary: true }));
  return zip.generateAsync({ type: 'blob', compression: 'STORE', streamFiles: true }, (meta) =>
    onProgress(meta.percent),
  );
  
}
