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
        <LinkBox mb={['baseline-2', null, 0]} display="inline-block">
            <Flex
                height={['baseline-4', null, null, 'baseline-4-lg']}
                flexDirection="column"
                justifyContent="flex-end"
                fontFamily={theme.fonts.auxiliary}
            >
                <Text
                    fontSize={['md', null, null, 'md-lg']}
                    lineHeight={1}
                    fontWeight="600"
                >
                    <LinkOverlay
                        href="/"
                        _hover={hoverStyles}
                        _focusVisible={{
                            ...hoverStyles,
                            outline:
                                '3px solid var(--chakra-colors-primary-200)',
                        }}
                        as={NextLink}
                    >
                        Fernando Nagase
                    </LinkOverlay>
                </Text>
                <Text
                    fontSize={['sm', null, null, 'sm-lg']}
                    lineHeight="normal"
                >
                    Engenheiro de Software
                </Text>
            </Flex>
        </LinkBox>
    )
}
