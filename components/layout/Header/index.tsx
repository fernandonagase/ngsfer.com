import { Text } from '@chakra-ui/react'

import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

export default function Header() {
    return (
        <header>
            <div>
                <Text textStyle="lg" className={poppins.className}>
                    Fernando Nagase
                </Text>
                <Text textStyle="md">Engenheiro de Software</Text>
            </div>
            <SiteNavigation />
            <ContactMe />
        </header>
    )
}
