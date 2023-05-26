import { Box } from '@chakra-ui/react'
import ContactMe from '../ContactMe'

export default function Footer() {
    return (
        <Box px={6} as="footer">
            <ContactMe />
        </Box>
    )
}
