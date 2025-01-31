import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import Layout from '../components/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* Page-specific head tags */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}