import { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@chakra-ui/react'

type MainLayoutProps = {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <Box px="baseline-2" my="baseline-4" as="main">
                {children}
            </Box>
            <Footer />
        </>
    )
}
