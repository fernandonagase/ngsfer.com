'use client'

import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import { HiOutlineExternalLink, HiArrowLeft } from 'react-icons/hi'

import Skills from '@/app/components/skills'
import { Project } from '@/lib/portfolio/types/project'
import Heading from '@/app/components/heading'

type ProjectPageProps = {
    project: Project
}

export default function ProjectPage(props: ProjectPageProps) {
    const { project } = props
    return (
        <>
            <article>
                <NextLink
                    href="/portfolio"
                    variant="back"
                    display="inline-flex"
                    alignItems="center"
                    gap={['baseline-1', null, null, 'baseline-1-lg']}
                    mb={['baseline-5', null, null, 'baseline-5-lg']}
                >
                    <Icon as={HiArrowLeft} />
                    Voltar para projetos
                </NextLink>
                <Heading textStyle="typescale-6">{project.name}</Heading>
                <Text textStyle="typescale-3" mb="baseline-4">
                    {project.description}
                </Text>
                <Box mb="baseline-4" as="section">
                    <Heading level={2} textStyle="typescale-5" marginBottom={1}>
                        Competências
                    </Heading>
                    <Skills skills={project.skills} />
                </Box>
                <Box mb="baseline-2" as="section">
                    <Heading level={2} textStyle="typescale-5" marginBottom={1}>
                        Acesse o projeto
                    </Heading>
                    <Flex
                        gap={['baseline-1', null, null, 'baseline-1-lg']}
                        align="baseline"
                    >
                        <Link
                            href={project.repositoryUrl}
                            isExternal
                            textStyle="typescale-3"
                            display="flex"
                            alignItems="center"
                        >
                            Repositório
                            <Icon as={HiOutlineExternalLink} ml="4px" />
                        </Link>
                        <Link
                            href={project.previewUrl}
                            isExternal
                            textStyle="typescale-3"
                            display="flex"
                            alignItems="center"
                        >
                            Demonstração
                            <Icon as={HiOutlineExternalLink} ml="4px" />
                        </Link>
                    </Flex>
                </Box>
            </article>
        </>
    )
}
