import { Box, Icon, Link, List, ListItem, useTheme } from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import NavigationItem from './NavigationItem'

export default function SiteNavigation() {
    const theme = useTheme()

    return (
        <Box as="nav" ml="-8px">
            <List
                display="flex"
                gap={['baseline-1', null, null, 'baseline-1-lg']}
            >
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
                        fontFamily={theme.fonts.auxiliary}
                        textStyle="typescale-2"
                        variant="navigation"
                        display="flex"
                        alignItems="center"
                    >
                        Blog
                        <Icon as={HiOutlineExternalLink} ml="4px" />
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}
