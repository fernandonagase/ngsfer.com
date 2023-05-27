import { Box } from '@chakra-ui/react'
import ContactMe from '../ContactMe'

export default function Footer() {
    return (
        <Box as="footer" px="baseline-2">
            <Box
                borderTop="1px solid var(--chakra-colors-gray-300)"
                py="baseline-2"
            >
                <ContactMe />
            </Box>
        </Box>
    )
}
