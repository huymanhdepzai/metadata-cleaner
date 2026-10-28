import { describe, expect, it } from 'vitest';
import { detectLanguage, parseAcceptLanguage } from './detect';

describe('Tự chọn ngôn ngữ cho trang gốc', () => {
  it('đọc Accept-Language theo trọng số q', () => {
    expect(parseAcceptLanguage('en-US,en;q=0.9,vi;q=0.8')).toEqual(['en-US', 'en', 'vi']);
    expect(parseAcceptLanguage('vi;q=0.5, ja')).toEqual(['ja', 'vi']);
    expect(parseAcceptLanguage('')).toEqual([]);
  });

  it('lựa chọn đã lưu luôn thắng', () => {
    expect(detectLanguage({ cookie: 'a=1; lang=en', acceptLanguage: 'vi', country: 'VN' })).toBe('en');
    expect(detectLanguage({ cookie: 'lang=pt-br', country: 'US' })).toBe('pt-BR');
  });

  it('trình duyệt không phải tiếng Anh → theo trình duyệt', () => {
    expect(detectLanguage({ acceptLanguage: 'ja-JP,ja;q=0.9', country: 'VN' })).toBe('ja');
    expect(detectLanguage({ acceptLanguage: 'zh-HK,zh;q=0.9', country: 'US' })).toBe('zh-TW');
  });

  it('trình duyệt tiếng Anh ở Việt Nam → tiếng Việt theo quốc gia', () => {
    expect(detectLanguage({ acceptLanguage: 'en-US,en;q=0.9', country: 'VN' })).toBe('vi');
    expect(detectLanguage({ country: 'BR' })).toBe('pt-BR');
  });

  it('không có tín hiệu nào khớp → tiếng Anh', () => {
    expect(detectLanguage({ acceptLanguage: 'en-US', country: 'US' })).toBe('en');
    expect(detectLanguage({ acceptLanguage: 'en-GB', country: 'IN' })).toBe('en');
    expect(detectLanguage({})).toBe('en');
    expect(detectLanguage({ cookie: 'lang=xx', acceptLanguage: 'nb-NO' })).toBe('en');
  });
});
