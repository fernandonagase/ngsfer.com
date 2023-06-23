import { Box, Heading, Link, Text, useTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import Skills from '../Skills'

type ProjectCardProps = {
    slug: string
    name: string
    description: string
    skills: string[]
}

export default function ProjectCard({
    slug,
    name,
    description,
    skills,
}: ProjectCardProps) {
    const theme = useTheme()

    return (
        <Box as="article">
            <Box
                as="h2"
                textStyle="typescale-4"
                fontFamily={theme.fonts.heading}
                fontWeight="500"
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
            </Box>
            <Text
                textStyle="typescale-3"
                noOfLines={2}
                marginBottom={['baseline-1', null, null, 'baseline-1-lg']}
            >
                {description}
            </Text>
            <Skills skills={skills} />
        </Box>
    )
}
