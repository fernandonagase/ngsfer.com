import { ListItem, UnorderedList } from '@chakra-ui/react'
import ContactItem from './ContactItem'

export default function ContactMe() {
    return (
        <address>
            <UnorderedList>
                <ListItem>
                    <ContactItem url="https://linkedin.com/in/fernandonagase">
                        LinkedIn
                    </ContactItem>
                </ListItem>
                <ListItem>
                    <ContactItem url="https://github.com/fernandonagase">
                        GitHub
                    </ContactItem>
                </ListItem>
                <ListItem>
                    <ContactItem url="mailto:fernando@ngsfer.com">
                        E-mail
                    </ContactItem>
                </ListItem>
            </UnorderedList>
        </address>
    )
}
