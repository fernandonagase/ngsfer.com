import { Box, Flex, Text, useTheme } from '@chakra-ui/react'

import ContactMe from '@/app/components/contact-me'

export default function Footer() {
    const theme = useTheme()

    return (
        <Box
            as="footer"
            my={['baseline-6', null, null, 'baseline-6-lg']}
            color="gray.600"
        >
            <Flex
                pt={['baseline-2', null, null, 'baseline-1-lg']}
                flexDirection={['column', null, 'row']}
                alignItems={['flex-start', null, 'center']}
                justifyContent={[null, null, 'space-between']}
                fontFamily={theme.fonts.auxiliary}
            >
                <Text textStyle="typescale-2">© Fernando Nagase</Text>
                <ContactMe />
            </Flex>
        </Box>
    )
}
