import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/cdn-cgi/'],
      },
    ],
    sitemap: 'https://apollodiagnostics.in/sitemap.xml',
  }
}
