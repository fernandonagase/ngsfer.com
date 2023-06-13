import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Logo() {
    return (
        <LinkBox mb={['baseline-2', null, 0]} display="inline-block">
            <Flex
                height={['baseline-4', null, null, 'baseline-4-lg']}
                flexDirection="column"
                justifyContent="flex-end"
            >
                <Text
                    fontSize={['md', null, null, 'md-lg']}
                    lineHeight="normal"
                    fontWeight="700"
                >
                    <LinkOverlay href="/" as={NextLink}>
                        Fernando Nagase
                    </LinkOverlay>
                </Text>
                <Text
                    fontSize={['md', null, null, 'md-lg']}
                    lineHeight="normal"
                >
                    Engenheiro de Software
                </Text>
            </Flex>
        </LinkBox>
    )
}
