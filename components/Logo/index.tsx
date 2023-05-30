import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Logo() {
    return (
        <LinkBox mb="baseline-2" display="inline-block">
            <Text fontSize="md" lineHeight="baseline-2" fontWeight="700">
                <LinkOverlay href="/" as={NextLink}>
                    Fernando Nagase
                </LinkOverlay>
            </Text>
            <Text fontSize="md" lineHeight="baseline-2">
                Engenheiro de Software
            </Text>
        </LinkBox>
    )
}
