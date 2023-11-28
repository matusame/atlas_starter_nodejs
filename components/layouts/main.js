import { useRouter } from 'next/router';
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import NavBar from '../navbar'
import GTag from '../gTag'

const Main = ({ children }) => {

  const router = useRouter();


  const excludeFooterRoutes = ['/contato']; // Add more routes if needed

  // Check if the current route should exclude the Footer
  const shouldExcludeFooter = excludeFooterRoutes.includes(router.pathname);


  return (
    <Box as="main">
      <Head>
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="language" content="Portuguese" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transformamos ideias em experiências incríveis. Somos uma estúdio de design especializado em criar soluções de design inovadoras, atraentes e funcionais."
        />
        <meta name="author" content="Moskavo" />
        <meta name="author" content="moskavo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@moskavo" />
        <meta name="twitter:creator" content="@moskavo" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Moskavo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Farm Delivery"
        />
        <meta
          property="og:description"
          content="Transformamos ideias em experiências incríveis. Somos uma estúdio de design especializado em criar soluções de design inovadoras, atraentes e funcionais."
        />
        <meta property="og:url" content="https://www.moskavo.com" />

        {/* schema.org markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Moskavo",
              "description": "Transformamos ideias em experiências incríveis. Somos uma estúdio de design especializado em criar soluções de design inovadoras, atraentes e funcionais.",
              "url": "https://www.moskavo.com",
              "logo": "URL_do_seu_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-43-99980-4276",
                "contactType": "contact"
              },
              "sameAs": [
                "https://www.facebook.com/moskavo",
                "https://twitter.com/moskavo",
                "https://www.linkedin.com/company/moskavo"
              ]
            }
          `}
        </script>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <title>Farm Delivery</title>
      </Head>
      <GTag />
      <NavBar path={router.asPath} />
      <Container>
        <Box>{children}</Box>
        {!shouldExcludeFooter && <Footer />}
      </Container>
    </Box>
  )
}

export default Main
