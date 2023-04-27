import ContactMe from '@/components/ContactMe'
import SiteNavigation from '@/components/SiteNavigation'

export default function Header() {
    return (
        <header>
            <div>
                <p>Fernando Nagase</p>
                <p>Engenheiro de Software</p>
            </div>
            <SiteNavigation />
            <ContactMe />
        </header>
    )
}
