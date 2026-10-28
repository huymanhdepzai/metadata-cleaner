import { useEffect, type RefObject } from 'react';

/**
 * Hiệu ứng hiện dần khi cuộn tới — kiểu "tăng cường dần" để không ảnh hưởng SEO:
 *  - HTML prerender không có trạng thái ẩn nào: bot (và người dùng khi JS lỗi/tắt) luôn thấy đủ nội dung.
 *  - Sau khi JS chạy, chỉ những khối đang nằm DƯỚI màn hình mới bị ẩn tạm (khối đang thấy giữ nguyên → không nháy,
 *    không ảnh hưởng LCP/CLS vì chỉ đổi opacity/transform, không đổi bố cục).
 *  - Bỏ qua hoàn toàn khi người dùng bật "giảm chuyển động" hoặc trình duyệt thiếu IntersectionObserver.
 * Đánh dấu bằng `data-reveal` (cả khối) hoặc `data-reveal="group"` (các phần tử con hiện lần lượt).
 * Trạng thái nằm ở thuộc tính riêng `data-reveal-state` (không có trong JSX) để React không ghi đè; gỡ khi xong.
 */
const STAGGER_MS = 90;
const MAX_STAGGER = 6;
const DURATION_MS = 700;

export function useScrollReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = root.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targetsOf = (el: HTMLElement) => (el.dataset.reveal === 'group' ? (Array.from(el.children) as HTMLElement[]) : [el]);
    const timers: number[] = [];

    const reveal = (el: HTMLElement) =>
      targetsOf(el).forEach((t, i) => {
        const delay = Math.min(i, MAX_STAGGER) * STAGGER_MS;
        t.style.setProperty('--reveal-delay', `${delay}ms`);
        t.dataset.revealState = 'in';
        timers.push(
          window.setTimeout(() => {
            t.removeAttribute('data-reveal-state');
            t.style.removeProperty('--reveal-delay');
          }, DURATION_MS + delay + 100),
        );
      });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          reveal(e.target as HTMLElement);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    const blocks = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    for (const el of blocks) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue; // đang thấy hoặc đã cuộn qua → giữ nguyên
      for (const t of targetsOf(el)) t.dataset.revealState = 'pending';
      io.observe(el);
    }

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      container.querySelectorAll<HTMLElement>('[data-reveal-state]').forEach((t) => {
        t.removeAttribute('data-reveal-state');
        t.style.removeProperty('--reveal-delay');
      });
    };
  }, [root]);
}
