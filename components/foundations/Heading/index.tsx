import { Box } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const textStyles = {
    h1: '2xl',
    h2: 'xl',
    h3: 'lg',
}

const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

type HeadingProps = {
    children: ReactNode
    level: 'h1' | 'h2' | 'h3'
}

export default function Heading({ children, level }: HeadingProps) {
    return (
        <Box
            as={level}
            textStyle={textStyles[level]}
            className={poppins.className}
            fontWeight="700"
            marginBlockEnd="1x"
        >
            {children}
        </Box>
    )
}
