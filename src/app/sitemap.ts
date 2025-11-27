import { MetadataRoute } from 'next'
import { PATH } from '@/config/PATH'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'
  const currentDate = new Date()

  // Helper function using native URL constructor for reliable URL composition
  const createUrl = (path: string): string => {
    return new URL(path, baseUrl).href
  }

  return [
    {
      url: createUrl(PATH.HOME),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: createUrl(PATH.ABOUT),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: createUrl(PATH.SERVICES),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: createUrl(PATH.PORTFOLIO),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: createUrl(PATH.CONTACT),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
