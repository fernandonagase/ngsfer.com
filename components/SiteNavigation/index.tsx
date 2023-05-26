import { Link, List, ListItem } from '@chakra-ui/react'
import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    return (
        <nav>
            <List display="flex" gap={6}>
                <ListItem>
                    <NavigationItem location="/">Início</NavigationItem>
                </ListItem>
                <ListItem>
                    <NavigationItem location="/portfolio">
                        Portfólio
                    </NavigationItem>
                </ListItem>
                <ListItem>
                    {/* <NavigationItem location="/blog">Blog</NavigationItem> */}
                    {/* Link externo enquanto o blog estiver hospedado no HashNode */}
                    <Link href="https://blog.ngsfer.com" isExternal>
                        Blog
                    </Link>
                </ListItem>
                <ListItem>
                    <NavigationItem location="/sobre">Sobre mim</NavigationItem>
                </ListItem>
            </List>
        </nav>
    )
}
