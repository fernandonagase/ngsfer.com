import { Fragment } from 'react'
import { Flex, VisuallyHidden, useTheme } from '@chakra-ui/react'

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
        <>
            <VisuallyHidden id="contact-me-label">Contato</VisuallyHidden>
            <Flex
                as="address"
                fontStyle="normal"
                alignItems="center"
                gap={itemSpacing}
                aria-labelledby="contact-me-label"
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
            </Flex>
        </>
    )
}
