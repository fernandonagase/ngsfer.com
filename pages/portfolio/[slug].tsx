import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import Skills from '@/components/Skills'
import { getPaths, getProjectFrom } from '@/lib/portfolio'
import { Project } from '@/lib/portfolio/types/project'

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
                <Heading
                    as="h1"
                    fontSize="4xl"
                    lineHeight="baseline-4"
                    mb="baseline-2"
                    color="fg"
                >
                    {project.name}
                </Heading>
                <Text
                    fontSize="md"
                    mb="baseline-4"
                    lineHeight="baseline-2"
                    color="fg"
                >
                    {project.description}
                </Text>
                <Box mb="baseline-4" as="section">
                    <Heading
                        as="h2"
                        fontSize="2xl"
                        lineHeight="baseline-3"
                        mb="baseline-2"
                        color="fg"
                    >
                        Competências
                    </Heading>
                    <Skills skills={project.skills} />
                </Box>
                <Box mb="baseline-2" as="section">
                    <Heading
                        as="h2"
                        fontSize="2xl"
                        lineHeight="baseline-3"
                        mb="baseline-2"
                        color="fg"
                    >
                        Acesse o projeto
                    </Heading>
                    <VStack align="flex-start" spacing="baseline-1">
                        <Link
                            href={project.repositoryUrl}
                            isExternal
                            fontSize="md"
                            lineHeight="baseline-2"
                        >
                            Repositório
                        </Link>
                        <Link
                            href={project.previewUrl}
                            isExternal
                            fontSize="md"
                            lineHeight="baseline-2"
                        >
                            Demonstração
                        </Link>
                    </VStack>
                </Box>
            </article>
        </>
    )
}
