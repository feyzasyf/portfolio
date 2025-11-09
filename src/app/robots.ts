import type { MetadataRoute } from 'next';
import { urlLink } from '@/constants';

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
    sitemap: `${urlLink}/sitemap.xml`,
  };
}
