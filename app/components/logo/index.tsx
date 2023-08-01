import {
    Flex,
    LinkBox,
    LinkOverlay,
    Text,
    defineStyle,
    useTheme,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const hoverStyles = defineStyle({
    textDecoration: 'underline',
    color: 'primary.700',
})

export default function Logo() {
    const theme = useTheme()

    return (
        <LinkBox
            mb={['baseline-1', null, 'baseline-1-lg']}
            maxWidth="max-content"
        >
            <Flex
                height={['baseline-4', null, null, 'baseline-4-lg']}
                flexDirection="column"
                justifyContent="flex-end"
                fontFamily={theme.fonts.auxiliary}
            >
                <LinkOverlay
                    href="/"
                    fontSize={['sm', null, null, 'sm-lg']}
                    lineHeight="normal"
                    fontWeight="600"
                    textTransform="uppercase"
                    display="inline-block"
                    _hover={hoverStyles}
                    _focusVisible={{
                        ...hoverStyles,
                        outline: '3px solid var(--chakra-colors-primary-200)',
                    }}
                    as={NextLink}
                >
                    Fernando Nagase
                </LinkOverlay>
                <Text fontSize={['sm', null, null, 'sm-lg']} lineHeight={1}>
                    Engenheiro de Software
                </Text>
            </Flex>
        </LinkBox>
    )
}
