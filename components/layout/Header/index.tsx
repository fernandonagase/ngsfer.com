import { Text } from '@chakra-ui/react'

import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'

export default function Header() {
    return (
        <header>
            <div>
                <Text textStyle="title">Fernando Nagase</Text>
                <Text textStyle="body">Engenheiro de Software</Text>
            </div>
            <SiteNavigation />
            <ContactMe />
        </header>
    )
}
