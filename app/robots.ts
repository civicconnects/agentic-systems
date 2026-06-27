
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/thank-you-pre-assessment'],
    },
    sitemap: 'https://www.ai-hub.agency/sitemap.xml',
  };
}
