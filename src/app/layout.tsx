import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { BASE_METADATA, PAGE_METADATA } from '@/config/metadata'
import { ReactNode } from 'react'
import AOSInit from '@/shared/AOSInit'
import StructuredData from '@/components/StructuredData'
import { getOwnerInfo } from '@/sanity/lib/getOwnerInfo'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...BASE_METADATA,
  ...PAGE_METADATA.home,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  // Fetch owner info once at root level
  const ownerInfo = await getOwnerInfo()

  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StructuredData type="home" ownerInfo={ownerInfo} />
        <ThemeProvider>
          <AOSInit />
          <Header ownerInfo={ownerInfo} />
          <main className="min-h-screen">{children}</main>
          <Footer ownerInfo={ownerInfo} />
        </ThemeProvider>
      </body>
    </html>
  )
}
