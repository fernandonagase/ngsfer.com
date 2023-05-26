import { Box } from '@chakra-ui/react'
import ContactMe from '../ContactMe'

export default function Footer() {
    return (
        <Box px="baseline-2" as="footer">
            <ContactMe />
        </Box>
    )
}
