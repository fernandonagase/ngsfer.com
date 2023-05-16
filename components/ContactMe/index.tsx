import { Icon, List, ListItem } from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

import ContactItem from './ContactItem'

export default function ContactMe() {
    return (
        <address>
            <List display="flex" gap={['2xSm', '1x']} ml={[-2, 0]}>
                <ListItem>
                    <ContactItem
                        url="https://linkedin.com/in/fernandonagase"
                        name="LinkedIn"
                    >
                        <Icon as={FaLinkedinIn} />
                    </ContactItem>
                </ListItem>
                <ListItem>
                    <ContactItem
                        url="https://github.com/fernandonagase"
                        name="GitHub"
                    >
                        <Icon as={FaGithub} />
                    </ContactItem>
                </ListItem>
                <ListItem>
                    <ContactItem url="mailto:fernando@ngsfer.com" name="E-mail">
                        <Icon as={HiMail} />
                    </ContactItem>
                </ListItem>
            </List>
        </address>
    )
}
