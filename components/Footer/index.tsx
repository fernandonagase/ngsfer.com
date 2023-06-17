import { Box } from '@chakra-ui/react'
import ContactMe from '../ContactMe'

export default function Footer() {
    return (
        <Box as="footer" mb={['baseline-1', null, null, 'baseline-2-lg']}>
            <Box
                borderTop="1px solid var(--chakra-colors-gray-300)"
                py={['baseline-1', null, null, 'baseline-1-lg']}
            >
                <ContactMe />
            </Box>
        </Box>
    )
}
