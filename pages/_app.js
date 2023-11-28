import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { CartProvider } from '../contexts/CartContext'
import { Analytics } from '@vercel/analytics/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <CartProvider>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            initial={true}
            mode="wait"
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
            <Analytics />
          </AnimatePresence>
        </Layout>
      </CartProvider>
    </Chakra>
  )
}

export default Website
