import { useId } from 'react';

/**
 * Biểu tượng thương hiệu: chữ "A" — chữ cái đầu của All Metadata Cleaner.
 * Nguồn duy nhất cho logo ở header/footer, ảnh Open Graph (seo/og.tsx) và favicon/icon PNG
 * (public/favicon.svg phải khớp với brandSvg(), có test kiểm tra). Lưới 32×32, nét trắng trên nền gradient.
 */
export function BrandMark({ className, gradientId }: { className?: string; gradientId?: string }) {
  const autoId = useId();
  const id = gradientId ?? `brand${autoId.replace(/:/g, '')}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${id})`} />
      {/* Chữ "A" vẽ bằng nét (không phụ thuộc font) để favicon/ảnh OG hiển thị giống hệt trên mọi máy. */}
      <path d="M9.5 23L16 9l6.5 14M11.8 18h8.4" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
