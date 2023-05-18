import { Link, List, ListItem } from '@chakra-ui/react'
import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    return (
        <nav>
            <List spacing={['1xSm', null, null, '1x']}>
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
                        variant="navigation"
                        textStyle={['lg', null, null, 'md']}
                        display="inline-block"
                        py={[4, null, null, 0]}
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
