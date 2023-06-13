import SiteNavigation from '@/components/SiteNavigation'
import { Flex } from '@chakra-ui/react'
import Logo from '../Logo'

export default function Header() {
    return (
        <Flex
            as="header"
            py={['baseline-2', null, null, 'baseline-2-lg']}
            direction={['column', null, 'row']}
            justifyContent={[null, null, 'space-between']}
            align={[null, null, 'flex-end']}
        >
            <Logo />
            <SiteNavigation />
        </Flex>
    )
}
