import { Box, Heading, Link, Text, useTheme } from '@chakra-ui/react'
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
    const theme = useTheme()

    return (
        <Box as="article">
            <Heading
                as="h2"
                fontSize={['xl', null, null, 'xl-lg']}
                lineHeight={['baseline-2', null, null, 'baseline-3-lg']}
                fontWeight="400"
                marginBottom={['baseline-1', null, null, 'baseline-1-lg']}
            >
                <Link
                    href={`portfolio/${slug}`}
                    color={theme.colors.fg}
                    textDecoration="none"
                    _hover={{
                        textDecoration: 'underline',
                        color: theme.colors.primary[700],
                    }}
                    as={NextLink}
                >
                    {name}
                </Link>
            </Heading>
            <Text
                fontSize={['md', null, null, 'md-lg']}
                lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                noOfLines={2}
            >
                {description}
            </Text>
        </Box>
    )
}
