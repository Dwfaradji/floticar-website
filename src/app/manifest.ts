import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Floticar — Logiciel de Gestion de Flotte Automobile',
    short_name: 'Floticar',
    description: 'Solution SaaS de gestion de flotte automobile pour PME, associations et structures médico-sociales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon-light.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-dark.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
