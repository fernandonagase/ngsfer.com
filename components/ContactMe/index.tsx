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
                fontSize={['md', null, null, 'md-lg']}
                lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                color="fg"
                mb={['baseline-1', null, null, 0]}
            >
                Fale comigo:
            </Text>
            <Box as="address" fontStyle="normal">
                <List
                    display="flex"
                    gap={['baseline-1', null, null, 'baseline-1-lg']}
                >
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
