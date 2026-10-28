import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://floticar.com'
    const lastUpdate = new Date('2025-02-15')

    const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: lastUpdate,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/remplacer-excel-gestion-flotte`,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/gestion-flotte-pme`,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/gestion-flotte-association`,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/secteurs/medico-social`,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/secteurs/ime`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/secteurs/sessad`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/fonctionnalites/application-mobile`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fonctionnalites/suivi-entretien`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/suivi-kilometrage-flotte`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gestion-carburant-flotte`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/simulateur`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tarifs`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/demande-de-demo`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: lastUpdate,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: lastUpdate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogEntries,
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2024-01-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal`,
            lastModified: new Date('2024-01-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cgu`,
            lastModified: new Date('2024-01-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
