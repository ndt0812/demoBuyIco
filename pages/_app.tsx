import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/themes'
import MainLayout from '../src/layouts'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
