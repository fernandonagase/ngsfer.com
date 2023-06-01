import { Link, List, ListItem } from '@chakra-ui/react'
import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    return (
        <nav>
            <List
                display="flex"
                gap={['baseline-2', null, null, 'baseline-2-lg']}
            >
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
                    <Link
                        href="https://blog.ngsfer.com"
                        isExternal
                        fontSize={['md', null, null, 'md-lg']}
                        lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                        variant="navigation"
                    >
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
