import { Box, Flex, Text, useTheme } from '@chakra-ui/react'

import ContactItem from './ContactItem'
import { Fragment } from 'react'

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
        <Flex
            gap={itemSpacing}
            fontFamily={theme.fonts.auxiliary}
            alignItems="center"
        >
            <Text textStyle="typescale-2">Contato:</Text>
            <Box
                as="address"
                fontStyle="normal"
                display="flex"
                alignItems="center"
                gap={itemSpacing}
            >
                {contactList.map((contact, index) => {
                    return (
                        <Fragment key={contact.name}>
                            {index !== 0 && '/'}
                            <ContactItem url={contact.location}>
                                {contact.name}
                            </ContactItem>
                        </Fragment>
                    )
                })}
            </Box>
        </Flex>
    )
}
