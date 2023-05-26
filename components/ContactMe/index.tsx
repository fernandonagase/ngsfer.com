import { List, ListItem, Text } from '@chakra-ui/react'

import ContactItem from './ContactItem'

export default function ContactMe() {
    return (
        <div>
            <Text>Fale comigo:</Text>
            <address>
                <List display="flex" gap="baseline-2">
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
                </List>
            </address>
        </div>
    )
}
