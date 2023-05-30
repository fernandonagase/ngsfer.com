import SiteNavigation from '@/components/SiteNavigation'
import { Box } from '@chakra-ui/react'
import Logo from '../Logo'

export default function Header() {
    return (
        <Box p="baseline-2" as="header">
            <Logo />
            <SiteNavigation />
        </Box>
    )
}
