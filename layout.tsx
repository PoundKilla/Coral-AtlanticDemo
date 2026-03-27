import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coral & Atlantic | Luxury Real Estate in Miami',
  description: 'Discover exceptional luxury properties in Miami, Florida. Coral & Atlantic offers premium waterfront estates, penthouses, and exclusive residences for discerning buyers.',
  keywords: ['luxury real estate', 'Miami properties', 'waterfront homes', 'penthouses', 'exclusive residences', 'Fisher Island', 'Coral Gables', 'Key Biscayne'],
  openGraph: {
    title: 'Coral & Atlantic | Luxury Real Estate in Miami',
    description: 'Miami\'s premier luxury real estate agency specializing in extraordinary waterfront properties and exclusive residences.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
