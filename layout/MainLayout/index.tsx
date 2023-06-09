import { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box, Container } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

type MainLayoutProps = {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <SkipNavLink zIndex="skipLink">Ir para o conteúdo</SkipNavLink>
            <Container
                maxW="container.lg"
                px={['baseline-2', null, null, 'baseline-4-lg']}
                color="fg"
            >
                <Header />
                <Box
                    as="main"
                    py={['baseline-4', null, null, 'baseline-4-lg']}
                    maxW="80ch"
                >
                    <SkipNavContent />
                    {children}
                </Box>
                <Footer />
            </Container>
        </>
    )
}
