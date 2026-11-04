import { useEffect, useState, type AnimationEvent } from 'react';

/** Một đoạn chữ của tiêu đề; `className` dùng để tô màu riêng (vd. phần nhấn mạnh). */
export interface SwapSegment {
  text: string;
  className?: string;
}

/** Độ trễ giữa hai ký tự liền nhau (ms); thời gian lật mỗi ký tự nằm ở `.l3d` trong index.css. */
const STAGGER_MS = 30;

/**
 * Chữ viết có nét nối hoặc ghép phức tạp (Ả Rập, Hebrew, Ấn Độ, Thái…): tách thành từng ký tự sẽ làm vỡ hình chữ
 * → hiển thị chữ thường, không hiệu ứng.
 */
const COMPLEX_SCRIPT = /[֐-ࣿऀ-෿฀-໿က-႟יִ-﷿ﹰ-﻿]/;
/** Chữ không dùng dấu cách giữa các từ (Hán, Kana, Hangul): cho phép xuống dòng giữa mọi ký tự. */
const NO_SPACE_SCRIPT = /[぀-ヿ㐀-鿿가-힯豈-﫿]/;

/** Tách chuỗi thành grapheme (giữ nguyên emoji, ký tự có dấu kết hợp). Node lúc prerender cũng có Intl.Segmenter. */
function splitIntoCharacters(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
}

/**
 * Tiêu đề với hiệu ứng "Letter 3D Swap": mỗi ký tự là một hộp 3D có hai mặt (mặt trước + mặt dưới), khi rê chuột
 * hoặc chạm vào thì lần lượt lật lên để mặt dưới hiện ra, rồi trở về trạng thái đầu. Tự chạy một lần khi tải trang.
 *
 * SEO/khả năng truy cập: mặt thứ hai vẽ bằng `::after { content: attr(data-char) }` nên không nằm trong văn bản của
 * trang — HTML prerender và textContent vẫn đúng nguyên tiêu đề; `aria-label` giúp trình đọc màn hình đọc cả câu.
 */
export function Letter3DSwap({ segments, className = '' }: { segments: SwapSegment[]; className?: string }) {
  const label = segments.map((s) => s.text).join(' ');
  const animated = !COMPLEX_SCRIPT.test(label);
  const [playing, setPlaying] = useState(false);

  // Mỗi đoạn → các từ → các ký tự, đánh số liên tục để độ trễ chạy suốt cả tiêu đề.
  let index = 0;
  const words = segments.flatMap((segment, s) => {
    const parts = segment.text.split(' ').filter(Boolean);
    return parts.map((word, w) => ({
      className: segment.className,
      breakAnywhere: NO_SPACE_SCRIPT.test(word),
      chars: splitIntoCharacters(word).map((char) => ({ char, index: index++ })),
      needsSpace: w !== parts.length - 1 || s !== segments.length - 1,
    }));
  });
  const lastIndex = index - 1;

  useEffect(() => {
    if (!animated || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setPlaying(true), 600);
    return () => window.clearTimeout(timer);
  }, [animated]);

  if (!animated) {
    return (
      <h1 className={className}>
        {segments.map((s, i) => (
          <span key={i} className={s.className}>
            {s.text}
            {i !== segments.length - 1 && ' '}
          </span>
        ))}
      </h1>
    );
  }

  const play = () => setPlaying(true);
  const onAnimationEnd = (e: AnimationEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).dataset.last !== undefined) setPlaying(false);
  };

  return (
    <h1
      className={`l3d ${playing ? 'is-swapping' : ''} ${className}`}
      aria-label={label}
      onMouseEnter={play}
      onPointerDown={play}
      onAnimationEnd={onAnimationEnd}
    >
      {words.map((word, w) => (
        <span key={w} className={word.className}>
          <span className={word.breakAnywhere ? '' : 'l3d-word'}>
            {word.chars.map(({ char, index }) => (
              <span
                key={index}
                className="l3d-char"
                data-char={char}
                data-last={index === lastIndex ? '' : undefined}
                style={{ animationDelay: `${index * STAGGER_MS}ms` }}
              >
                {char}
              </span>
            ))}
          </span>
          {word.needsSpace && ' '}
        </span>
      ))}
    </h1>
  );
}
