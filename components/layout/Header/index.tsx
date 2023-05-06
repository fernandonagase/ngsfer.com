import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'

import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'

const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

export default function Header() {
    const nameSize = useBreakpointValue({
        base: 'md',
        sm: 'lg',
    })
    const jobSize = useBreakpointValue({
        base: 'sm',
        sm: 'md',
    })

    return (
        <Box as="header" px={['1xSm', '1x']} py="1xSm">
            <div>
                <Text
                    textStyle={nameSize}
                    fontWeight="700"
                    lineHeight="normal"
                    className={poppins.className}
                >
                    Fernando Nagase
                </Text>
                <Text textStyle={jobSize} lineHeight="normal">
                    Engenheiro de Software
                </Text>
            </div>
            <SiteNavigation />
            <ContactMe />
        </Box>
    )
}
