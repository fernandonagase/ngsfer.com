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
        <Box as="article" mb="baseline-3">
            <LinkBox>
                <Heading
                    as="h2"
                    fontSize="2xl"
                    fontWeight="600"
                    lineHeight="baseline-3"
                    color="fg"
                >
                    <LinkOverlay href={`portfolio/${slug}`} as={NextLink}>
                        {name}
                    </LinkOverlay>
                </Heading>
                <Text
                    fontSize="md"
                    lineHeight="baseline-2"
                    noOfLines={2}
                    color="fg"
                >
                    {description}
                </Text>
            </LinkBox>
        </Box>
    )
}
