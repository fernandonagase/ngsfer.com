import { Box, Flex, Text, useTheme } from '@chakra-ui/react'

import ContactMe from '@/app/components/contact-me'

export default function Footer() {
    const theme = useTheme()

    return (
        <Box
            as="footer"
            mt={['baseline-4', null, null, 'baseline-4-lg']}
            mb={['baseline-8', null, null, 'baseline-8-lg']}
        >
            <Flex
                borderTop="1px solid var(--chakra-colors-fg)"
                pt={['baseline-2', null, null, 'baseline-1-lg']}
                flexDirection={['column', null, 'row']}
                alignItems={['flex-start', null, 'center']}
                justifyContent={[null, null, 'space-between']}
                fontFamily={theme.fonts.auxiliary}
            >
                <Text textStyle="typescale-2" mb={['baseline-1', 0]}>
                    © Fernando Nagase
                </Text>
                <ContactMe />
            </Flex>
        </Box>
    )
}
