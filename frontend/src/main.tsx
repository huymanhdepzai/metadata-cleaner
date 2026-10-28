import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { bootstrapRouter } from './router';
import { initTheme } from './theme';
// Font tự host (cùng tên miền, có mã băm → cache lâu dài): không thêm kết nối tới máy chủ font bên ngoài
// trên đường găng hiển thị. Thứ tự unicode-range được tinh chỉnh trong fonts.css.
import './fonts.css';
import './index.css';

initTheme();

const container = document.getElementById('root')!;
// Trang đã được prerender thành HTML tĩnh (bản build) → hydrate; khi chạy dev hoặc URL bị chuyển hướng → render mới.
const prerendered = container.hasChildNodes();

void bootstrapRouter().then(({ redirected }) => {
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );
  if (prerendered && !redirected) {
    hydrateRoot(container, app);
  } else {
    container.textContent = '';
    createRoot(container).render(app);
  }
});
