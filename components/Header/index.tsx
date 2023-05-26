import SiteNavigation from '@/components/SiteNavigation'
import { Box } from '@chakra-ui/react'

export default function Header() {
    return (
        <Box p={6} as="header" pos="sticky">
            <SiteNavigation />
        </Box>
    )
}
