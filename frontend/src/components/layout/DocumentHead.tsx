import { useEffect } from 'react';
import { useI18n } from '../../i18n';
import { useRouter } from '../../router';
import { applyHead, buildHead } from '../../seo/head';

export function DocumentHead() {
  const lang = useI18n((s) => s.lang);
  const m = useI18n((s) => s.m);
  const articles = useI18n((s) => s.articles);
  const pages = useI18n((s) => s.pages);
  const tools = useI18n((s) => s.tools);
  const route = useRouter((s) => s.route);

  useEffect(() => {
    applyHead(buildHead({ lang, m, articles, pages, tools }, route));
  }, [lang, m, articles, pages, tools, route]);

  return null;
}
