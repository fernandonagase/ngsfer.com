import { Box, Flex, Text, useTheme } from '@chakra-ui/react'
import ContactMe from '../ContactMe'

export default function Footer() {
    const theme = useTheme()

    return (
        <Box as="footer" mb={['baseline-1', null, null, 'baseline-2-lg']}>
            <Flex
                borderTop="1px solid var(--chakra-colors-gray-300)"
                py={['baseline-1', null, null, 'baseline-1-lg']}
                flexDirection={['column', null, 'row']}
                alignItems={['flex-start', null, 'center']}
                justifyContent={[null, null, 'space-between']}
                fontFamily={theme.fonts.auxiliary}
            >
                <ContactMe />
                <Text textStyle="typescale-2">© 2023 Fernando Nagase</Text>
            </Flex>
        </Box>
    )
}
