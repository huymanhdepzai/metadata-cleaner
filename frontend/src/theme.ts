import { create } from './store/create';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';
const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

function readStored(): ThemeMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark' || v === 'system') return v;
  } catch {
    /* chế độ riêng tư / bị chặn lưu trữ */
  }
  return 'system';
}

/** Gắn/bỏ class `dark` trên <html>; bảng màu tối được định nghĩa trong index.css. */
function apply(mode: ThemeMode): void {
  const dark = mode === 'dark' || (mode === 'system' && darkQuery().matches);
  document.documentElement.classList.toggle('dark', dark);
  document.head.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0f172a' : '#4f46e5');
}

interface ThemeState {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
}

export const useTheme = create<ThemeState>()((set) => ({
  mode: readStored(),
  setMode(mode) {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* bỏ qua */
    }
    apply(mode);
    set({ mode });
  },
}));

/** Áp dụng chế độ đã lưu và theo dõi thay đổi giao diện của hệ điều hành khi đang ở chế độ "Theo hệ thống". */
export function initTheme(): void {
  apply(useTheme.getState().mode);
  darkQuery().addEventListener('change', () => {
    if (useTheme.getState().mode === 'system') apply('system');
  });
}
