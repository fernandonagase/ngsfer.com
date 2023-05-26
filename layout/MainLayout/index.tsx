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
            <Box px={6} my={12} as="main">
                {children}
            </Box>
            <Footer />
        </>
    )
}
