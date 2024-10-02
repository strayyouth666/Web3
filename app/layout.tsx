import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FLXTHESIXTH',
  icons: '',
  // description:
  //   'Start your Solana journey here, without unnecessary configuration and setup. Just clone it and code on top of it. Powered by Nightly Wallet.',
  twitter: {
    title: 'FLXTHESIXTH',
    // description:
    //   'Start your Solana journey here, without unnecessary configuration and setup. Just clone it and code on top of it. Powered by Nightly Wallet.',
    // images: 'https://solana-web3-template.nightly.app/preview.png',
    card: 'summary_large_image',
    // site: '@nightly_app',
  },
  openGraph: {
    title: 'FLXTHESIXTH',
    // description:
    //   'Start your Solana journey here, without unnecessary configuration and setup. Just clone it and code on top of it. Powered by Nightly Wallet.',
    // images: 'https://solana-web3-template.nightly.app/preview.png',
    // url: 'https://solana-web3-template.nightly.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
