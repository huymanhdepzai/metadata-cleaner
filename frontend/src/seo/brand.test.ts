import { describe, expect, it } from 'vitest';
import favicon from '../../public/favicon.svg?raw';
import { brandSvg } from './og';

describe('Biểu tượng thương hiệu', () => {
  it('public/favicon.svg khớp với BrandMark (chạy build rồi chép dist/favicon.svg sang public/ nếu đổi logo)', () => {
    expect(favicon.trim()).toBe(brandSvg());
  });
});
