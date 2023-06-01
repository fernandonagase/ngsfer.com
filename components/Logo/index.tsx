import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Logo() {
    return (
        <LinkBox mb={['baseline-2', null, 0]} display="inline-block">
            <Text
                fontSize={['md', null, null, 'md-lg']}
                lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                fontWeight="700"
            >
                <LinkOverlay href="/" as={NextLink}>
                    Fernando Nagase
                </LinkOverlay>
            </Text>
            <Text
                fontSize={['md', null, null, 'md-lg']}
                lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
            >
                Engenheiro de Software
            </Text>
        </LinkBox>
    )
}
