import { Box, List, ListItem, Text } from '@chakra-ui/react'

import ContactItem from './ContactItem'

const contactList = [
    {
        name: 'LinkedIn',
        location: 'https://linkedin.com/in/fernandonagase',
    },
    {
        name: 'GitHub',
        location: 'https://github.com/fernandonagase',
    },
    {
        name: 'E-mail',
        location: 'mailto:fernando@ngsfer.com',
    },
]

export default function ContactMe() {
    return (
        <div>
            <Text
                fontSize="md"
                lineHeight="baseline-2"
                color="fg"
                mb="baseline-1"
            >
                Fale comigo:
            </Text>
            <Box as="address" fontStyle="normal">
                <List display="flex" gap="baseline-1">
                    {contactList.map((contact) => {
                        return (
                            <ListItem key={contact.name}>
                                <ContactItem url={contact.location}>
                                    {contact.name}
                                </ContactItem>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </div>
    )
}
