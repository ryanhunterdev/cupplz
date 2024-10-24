import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cupplz',
    short_name: 'Cupplz',
    description: 'Get the perfect cup every time',
    start_url: './?mode=standalone',
    display: 'standalone',
    background_color: '#845C30',
    theme_color: '#845C30',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}