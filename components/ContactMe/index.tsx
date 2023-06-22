import { Box, Flex, List, ListItem, Text, useTheme } from '@chakra-ui/react'

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
const itemSpacing = ['baseline-1', null, null, 'baseline-1-lg']

export default function ContactMe() {
    const theme = useTheme()

    return (
        <Flex gap={itemSpacing} fontFamily={theme.fonts.auxiliary}>
            <Text textStyle="typescale-2" mb={['baseline-1', null, null, 0]}>
                Contato:
            </Text>
            <Box as="address" fontStyle="normal">
                <List display="flex" gap={itemSpacing}>
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
        </Flex>
    )
}
