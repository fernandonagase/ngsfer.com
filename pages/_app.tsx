import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import MainLayout from '@/layout/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    )
}
