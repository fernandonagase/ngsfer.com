import { Box, Text, Link, useTheme, Stack, Icon } from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Skills from '@/app/components/skills'
import { poppins } from '@/theme/util/nextjs-fonts'

type ProjectCardProps = {
    name: string
    description: string
    skills: string[]
    repositoryUrl: string
    previewUrl: string
}

export default function ProjectCard({
    name,
    description,
    skills,
    repositoryUrl,
    previewUrl,
}: ProjectCardProps) {
    const theme = useTheme()

    return (
        <Stack
            as="article"
            spacing={['baseline-1', null, null, 'baseline-1-lg']}
            align="flex-start"
        >
            <Box
                as="h2"
                textStyle="typescale-3"
                fontFamily={theme.fonts.heading}
                fontWeight="500"
            >
                <Link
                    href={previewUrl}
                    color={theme.colors.fg}
                    textDecoration="none"
                    _hover={{
                        textDecoration: 'underline',
                        color: theme.colors.primary[700],
                    }}
                    display="inline-flex"
                    alignItems="center"
                >
                    {name}
                    <Icon as={HiOutlineExternalLink} ml="4px" />
                </Link>
            </Box>
            <Text textStyle="typescale-3" noOfLines={3}>
                {description}
            </Text>
            <Text textStyle="typescale-2" fontFamily={poppins.style.fontFamily}>
                <Link
                    href={repositoryUrl}
                    display="inline-flex"
                    alignItems="center"
                >
                    Acesse o repositório
                    <Icon as={HiOutlineExternalLink} ml="4px" />
                </Link>
            </Text>
            <Skills skills={skills} />
        </Stack>
    )
}
