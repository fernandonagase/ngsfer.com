import { Link, ListItem, UnorderedList } from '@chakra-ui/react'

export default function ContactMe() {
    return (
        <address>
            <UnorderedList>
                <ListItem>
                    <Link
                        href="https://linkedin.com/in/fernandonagase"
                        isExternal
                    >
                        LinkedIn
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://github.com/fernandonagase" isExternal>
                        GitHub
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="mailto:fernando@ngsfer.com" isExternal>
                        E-mail
                    </Link>
                </ListItem>
            </UnorderedList>
        </address>
    )
}
