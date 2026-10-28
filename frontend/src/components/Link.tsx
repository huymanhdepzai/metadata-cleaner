import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { navigate } from '../router';

/** Thẻ <a> thật (crawler đọc được) nhưng điều hướng phía client khi người dùng bấm. */
export function Link({ to, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target) return;
    e.preventDefault();
    void navigate(to);
  };
  return <a href={to} onClick={handle} {...rest} />;
}
