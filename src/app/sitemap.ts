import type { MetadataRoute } from 'next';
import { urlLink } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: urlLink,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
