import { Text } from '@chakra-ui/react'

import Logo from '@/components/Logo'
import SiteNavigation from '@/components/SiteNavigation'
import ContactMe from '@/components/ContactMe'

export default function Header() {
    return (
        <header>
            <Logo />
            <SiteNavigation />
            <div>
                <Text>Fale comigo:</Text>
                <ContactMe />
            </div>
        </header>
    )
}
