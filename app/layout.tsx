import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaliza',
  description: 'Venta de placas antihumedad.',
  icons: {
    icon: { url: "/favicon.png", type: "image/png" }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
