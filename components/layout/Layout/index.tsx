import {
    Container,
    Flex,
    HStack,
    useBreakpointValue,
    useTheme,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import Header from '../Header'
import SideBar from '../SideBar'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const isLargerThanLg = useBreakpointValue({
        base: false,
        lg: true,
    })

    const { sizes } = useTheme()

    return (
        <>
            <Header />
            {isLargerThanLg ? (
                <Flex justify="center">
                    <HStack align="flex-start" px="4x">
                        <SideBar />
                        <Container
                            as="main"
                            pl={sizes.sidebar}
                            boxSizing="content-box"
                        >
                            {children}
                        </Container>
                    </HStack>
                </Flex>
            ) : (
                <Container as="main" px="2xSm">
                    {children}
                </Container>
            )}
        </>
    )
}
