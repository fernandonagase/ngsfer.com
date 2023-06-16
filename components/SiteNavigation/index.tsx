import { Icon, Link, List, ListItem } from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    return (
        <nav>
            <List
                display="flex"
                gap={['baseline-2', null, null, 'baseline-2-lg']}
            >
                <ListItem>
                    <NavigationItem location="/" label="Início" />
                </ListItem>
                <ListItem>
                    <NavigationItem location="/sobre" label="Sobre mim" />
                </ListItem>
                <ListItem>
                    <NavigationItem location="/portfolio" label="Portfólio" />
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
                        display="flex"
                        alignItems="center"
                    >
                        Blog
                        <Icon as={HiOutlineExternalLink} ml="4px" />
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}
