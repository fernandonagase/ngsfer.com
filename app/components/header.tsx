import { Flex } from '@chakra-ui/react'

import Logo from '@/components/Logo'
import SiteNavigation from '@/app/components/site-navigation'

export default function Header() {
    return (
        <Flex
            as="header"
            direction="column"
            mt={['baseline-4', null, null, 'baseline-4-lg']}
            mb={['baseline-6', null, null, 'baseline-6-lg']}
        >
            <Logo />
            <SiteNavigation />
        </Flex>
    )
}
