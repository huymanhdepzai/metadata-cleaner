import { useMemo } from 'react';
import { guideContent } from '../../content/guideContent';
import { availableGuides, GUIDE_DATES, HOME_SECTIONS, PAGE_UPDATED, SITE, TOOL_SLUGS } from '../../content/seo';
import { toolFaq } from '../../content/tools/types';
import { useI18n } from '../../i18n';
import { absoluteUrl, GUIDES_INDEX, HOME, pathFor, TOOLS_INDEX, useRouter } from '../../router';
import { OG_SIZE, ogImagePath } from '../../seo/head';

/** Tổ chức đứng sau trang (dùng làm publisher của bài viết; logo giúp Google hiển thị thương hiệu). */
const ORGANIZATION = {
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: SITE.name,
  url: absoluteUrl('/'),
  logo: { '@type': 'ImageObject', url: absoluteUrl('/icon-512.png'), width: 512, height: 512 },
  ...(SITE.contactEmail ? { email: SITE.contactEmail } : {}),
} as const;

/**
 * Dữ liệu có cấu trúc (schema.org JSON-LD) theo trang, sinh từ chính nội dung hiển thị:
 *  - Trang chủ: WebApplication + Organization + WebSite + FAQPage + HowTo
 *  - Trang công cụ: WebApplication riêng của công cụ + FAQPage + BreadcrumbList
 *  - Trang hướng dẫn: Article + BreadcrumbList (+ FAQPage nếu bài có phần hỏi đáp)
 */
export function StructuredData() {
  const lang = useI18n((s) => s.lang);
  const m = useI18n((s) => s.m);
  const seo = m.seo;
  const articles = useI18n((s) => s.articles);
  const pages = useI18n((s) => s.pages);
  const bodies = useI18n((s) => s.bodies);
  const tools = useI18n((s) => s.tools);
  const route = useRouter((s) => s.route);

  const blocks = useMemo(() => {
    const homeUrl = absoluteUrl(pathFor(lang, HOME));

    if (route.name === 'home') {
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: SITE.name,
          alternateName: ['Free Metadata Cleaner', 'AI Metadata Cleaner', 'AI Tag Remover'],
          url: homeUrl,
          image: absoluteUrl(ogImagePath(route)),
          inLanguage: lang,
          description: m.meta.description,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Any (web browser)',
          browserRequirements: 'Requires JavaScript and a modern browser with Web Workers.',
          isAccessibleForFree: true,
          featureList: seo.features.items.map((f) => f.title),
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@id': ORGANIZATION['@id'] },
        },
        { '@context': 'https://schema.org', ...ORGANIZATION },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE.name,
          url: homeUrl,
          inLanguage: lang,
          publisher: { '@id': ORGANIZATION['@id'] },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          inLanguage: lang,
          mainEntity: seo.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          inLanguage: lang,
          name: seo.howToSchema.name,
          description: seo.howToSchema.description,
          totalTime: 'PT1M',
          tool: [{ '@type': 'HowToTool', name: SITE.name }],
          step: seo.how.steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.title,
            text: s.text,
            url: `${homeUrl}#${HOME_SECTIONS.how}`,
          })),
        },
      ];
    }

    if (route.name === 'guides') {
      const url = absoluteUrl(pathFor(lang, route));
      const slugs = availableGuides(lang);
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          inLanguage: lang,
          name: seo.guides.title,
          url,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: slugs.map((slug, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: absoluteUrl(pathFor(lang, { name: 'guide', slug })),
              name: guideContent({ m, articles }, slug)?.title,
            })),
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: seo.guides.home, item: homeUrl },
            { '@type': 'ListItem', position: 2, name: seo.guides.eyebrow, item: url },
          ],
        },
      ];
    }

    if (route.name === 'tools' || route.name === 'tool') {
      if (!tools) return [];
      const toolsUrl = absoluteUrl(pathFor(lang, TOOLS_INDEX));
      const crumbs = [
        { '@type': 'ListItem', position: 1, name: seo.guides.home, item: homeUrl },
        { '@type': 'ListItem', position: 2, name: m.tools.crumb, item: toolsUrl },
      ];
      if (route.name === 'tools') {
        return [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            inLanguage: lang,
            name: tools.hub.title,
            description: tools.hub.description,
            url: toolsUrl,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: TOOL_SLUGS.map((slug, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: absoluteUrl(pathFor(lang, { name: 'tool', slug })),
                name: tools.tools[slug].title,
              })),
            },
          },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs },
        ];
      }
      const tool = tools.tools[route.slug];
      const url = absoluteUrl(pathFor(lang, route));
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          inLanguage: lang,
          name: tool.title,
          description: tool.description,
          url,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Any (web browser)',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@id': ORGANIZATION['@id'] },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          inLanguage: lang,
          mainEntity: toolFaq(tool).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [...crumbs, { '@type': 'ListItem', position: 3, name: tool.title, item: url }],
        },
      ];
    }

    if (route.name === 'page') {
      const page = pages?.[route.slug];
      if (!page) return [];
      const url = absoluteUrl(pathFor(lang, route));
      const type = { about: 'AboutPage', contact: 'ContactPage', privacy: 'WebPage', terms: 'WebPage' }[route.slug];
      return [
        {
          '@context': 'https://schema.org',
          '@type': type,
          inLanguage: lang,
          name: page.title,
          description: page.description,
          url,
          dateModified: PAGE_UPDATED[route.slug],
          isPartOf: { '@type': 'WebSite', name: SITE.name, url: homeUrl },
          ...(route.slug === 'about' || route.slug === 'contact' ? { mainEntity: ORGANIZATION } : {}),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: seo.guides.home, item: homeUrl },
            { '@type': 'ListItem', position: 2, name: m.pages[route.slug], item: url },
          ],
        },
      ];
    }

    const guide = guideContent({ m, articles }, route.slug);
    if (!guide) return [];
    const article = bodies[route.slug];
    const url = absoluteUrl(pathFor(lang, route));
    const result: object[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        inLanguage: lang,
        headline: guide.title,
        description: article?.description ?? guide.summary[0],
        image: { '@type': 'ImageObject', url: absoluteUrl(ogImagePath(route)), width: OG_SIZE.width, height: OG_SIZE.height },
        mainEntityOfPage: url,
        datePublished: GUIDE_DATES[route.slug].published,
        dateModified: GUIDE_DATES[route.slug].updated,
        author: { '@type': 'Organization', name: SITE.name, url: absoluteUrl('/') },
        publisher: ORGANIZATION,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: seo.guides.home, item: homeUrl },
          { '@type': 'ListItem', position: 2, name: seo.guides.eyebrow, item: absoluteUrl(pathFor(lang, GUIDES_INDEX)) },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
    ];
    if (article?.faq.length) {
      result.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: article.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      });
    }
    return result;
  }, [lang, m, seo, articles, bodies, pages, tools, route]);

  return (
    <>
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b).replace(/</g, '\\u003c') }} />
      ))}
    </>
  );
}
