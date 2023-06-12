import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

type ProjectCardProps = {
    slug: string
    name: string
    description: string
}

export default function ProjectCard({
    slug,
    name,
    description,
}: ProjectCardProps) {
    return (
        <Box as="article">
            <LinkBox>
                <Heading
                    as="h2"
                    fontSize={['2xl', null, null, '2xl-lg']}
                    lineHeight={['baseline-3', null, null, 'baseline-3-lg']}
                    fontWeight="600"
                >
                    <LinkOverlay href={`portfolio/${slug}`} as={NextLink}>
                        {name}
                    </LinkOverlay>
                </Heading>
                <Text
                    fontSize={['md', null, null, 'md-lg']}
                    lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                    noOfLines={2}
                >
                    {description}
                </Text>
            </LinkBox>
        </Box>
    )
}
