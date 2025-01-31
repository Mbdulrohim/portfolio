import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Abdulrohim Mustapha | Full-Stack Developer" />
        <meta name="description" content="Professional portfolio showcasing expertise in Web3, blockchain, and cross-platform development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:title" content="Abdulrohim Mustapha | Full-Stack Developer" />
        <meta property="og:description" content="Building Web3 & Cross-Platform Solutions with Modern Technologies" />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com" />
        <meta property="twitter:title" content="Abdulrohim Mustapha | Full-Stack Developer" />
        <meta property="twitter:description" content="Building Web3 & Cross-Platform Solutions with Modern Technologies" />
        <meta property="twitter:image" content="https://yourdomain.com/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}