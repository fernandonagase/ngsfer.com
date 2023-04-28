import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
    level: 'h1' | 'h2' | 'h3'
}

export default function Heading({ children, level }: HeadingProps) {
    return (
        <Box as={level} textStyle={level}>
            {children}
        </Box>
    )
}
