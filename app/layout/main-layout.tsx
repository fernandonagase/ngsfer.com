'use client'

import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, Container } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import theme from '@/theme'

type MainLayoutProps = {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <SkipNavLink zIndex="skipLink">Ir para o conteúdo</SkipNavLink>
                <Container
                    maxW="90ch"
                    px={['baseline-2', null, null, 'baseline-4-lg']}
                    color="fg"
                >
                    <Header />
                    <Box
                        as="main"
                        _after={{
                            content: '""',
                            display: 'block',
                            width: '64px',
                            height: 0,
                            borderTop:
                                '1px solid var(--chakra-colors-gray-500)',
                            marginTop: [
                                'baseline-2',
                                null,
                                null,
                                'baseline-2-lg',
                            ],
                        }}
                    >
                        <SkipNavContent />
                        {children}
                    </Box>
                    <Footer />
                </Container>
            </ChakraProvider>
        </CacheProvider>
    )
}
