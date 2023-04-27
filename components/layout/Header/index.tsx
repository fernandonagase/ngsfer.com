import { Text } from '@chakra-ui/react'

import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'

export default function Header() {
    return (
        <header>
            <div>
                <Text>Fernando Nagase</Text>
                <Text>Engenheiro de Software</Text>
            </div>
            <SiteNavigation />
            <ContactMe />
        </header>
    )
}
