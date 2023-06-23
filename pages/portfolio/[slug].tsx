import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Skills from '@/components/Skills'
import { getPaths, getProjectFrom } from '@/lib/portfolio'
import { Project } from '@/lib/portfolio/types/project'
import Heading from '@/components/Heading'

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getPaths()
    return {
        paths: paths.map((path) => ({
            params: {
                slug: path,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{
    project: Project
}> = async (context) => {
    const slug = context.params?.slug
    if (!slug || Array.isArray(slug)) {
        return {
            notFound: true,
        }
    }

    const project = await getProjectFrom(slug)
    return {
        props: {
            project,
        },
    }
}

export default function Project(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const { project } = props
    return (
        <>
            <Head>
                <title>{project.name}</title>
                <meta name="description" content={project.description} />
            </Head>

            <article>
                <Heading>{project.name}</Heading>
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
