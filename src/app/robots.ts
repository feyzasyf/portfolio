import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: [
          'anthropic-ai',
          'ClaudeBot',
          'GPTBot',
          'Google-Extended',
          'PerplexityBot',
          'cohere-ai',
          'CCBot',
          'FacebookBot',
        ],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://feyzasyf.github.io/sitemap.xml',
  };
}
