import { Text, useBreakpointValue } from '@chakra-ui/react'
import { Gelasio, Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

const gelasio = Gelasio({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Logo() {
    const nameSize = useBreakpointValue({
        base: 'md',
        sm: 'lg',
    })
    const jobSize = useBreakpointValue({
        base: 'sm',
        sm: 'md',
    })

    return (
        <div>
            <Text
                textStyle={nameSize}
                fontWeight="700"
                lineHeight="short"
                className={poppins.className}
            >
                Fernando Nagase
            </Text>
            <Text
                textStyle={jobSize}
                lineHeight="none"
                className={gelasio.className}
            >
                Engenheiro de Software
            </Text>
        </div>
    )
}
