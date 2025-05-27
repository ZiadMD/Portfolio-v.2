import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ziad Mohamed | Portfolio',
  description: 'A showcase of my technical skills, machine learning projects, and ways to get in touch.',
  openGraph: {
    title: 'Ziad Mohamed | Portfolio',
    description: 'Explore my projects, technical skills, and contact information.',
    url: 'https://ziadmd.github.io/Portfolio-v.2/',
    siteName: 'Ziad Mohamed Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/75117432?v=4',
        width: 1200,
        height: 630,
        alt: 'Ziad Mohamed Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
