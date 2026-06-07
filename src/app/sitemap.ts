import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://safeglobal.com'
  
  const routes = [
    '',
    '/about',
    '/blog',
    '/case-studies',
    '/contact',
    '/ehs-ai',
    '/erp',
    '/industries',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
