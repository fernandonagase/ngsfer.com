import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

import Header from '../Header'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Container as="main" px={0} mx="1xSm">
                {children}
            </Container>
        </>
    )
}
