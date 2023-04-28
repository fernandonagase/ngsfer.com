import { ListItem, UnorderedList } from '@chakra-ui/react'
import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    return (
        <nav>
            <UnorderedList>
                <ListItem>
                    <NavigationItem location="/">Início</NavigationItem>
                </ListItem>
                <ListItem>
                    <NavigationItem location="/portfolio">
                        Portfólio
                    </NavigationItem>
                </ListItem>
                <ListItem>
                    <NavigationItem location="/blog">Blog</NavigationItem>
                </ListItem>
                <ListItem>
                    <NavigationItem location="/sobre">Sobre mim</NavigationItem>
                </ListItem>
            </UnorderedList>
        </nav>
    )
}
