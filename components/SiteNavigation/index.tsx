import { Link, ListItem, UnorderedList } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function SiteNavigation() {
    return (
        <nav>
            <UnorderedList>
                <ListItem>
                    <Link href="/" as={NextLink}>
                        Início
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/portfolio" as={NextLink}>
                        Portfólio
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/blog" as={NextLink}>
                        Blog
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/sobre" as={NextLink}>
                        Sobre mim
                    </Link>
                </ListItem>
            </UnorderedList>
        </nav>
    )
}
