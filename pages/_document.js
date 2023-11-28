import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import GTag from '../components/gTag'

export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="en"
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <Head />
        <GTag />
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=G-FM1BLCHGTQ`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
