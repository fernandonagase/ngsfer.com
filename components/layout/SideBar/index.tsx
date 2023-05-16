import { Stack, Text } from '@chakra-ui/react'

import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'

export default function SideBar() {
    return (
        <Stack
            spacing="2x"
            as="aside"
            pr="2x"
            py="1x"
            width="sidebar"
            pos="fixed"
        >
            <SiteNavigation />
            <div>
                <Text textStyle="sm" mb="1x">
                    Fale comigo:
                </Text>
                <ContactMe />
            </div>
        </Stack>
    )
}
