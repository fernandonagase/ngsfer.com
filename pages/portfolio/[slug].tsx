import {
    Box,
    Heading as ChakraHeading,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

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
                <Text
                    fontSize={['md', null, null, 'md-lg']}
                    lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
                    mb="baseline-4"
                >
                    {project.description}
                </Text>
                <Box mb="baseline-4" as="section">
                    <ChakraHeading
                        as="h2"
                        fontSize={['2xl', null, null, '2xl-lg']}
                        lineHeight={['baseline-3', null, null, 'baseline-3-lg']}
                        mb="baseline-2"
                    >
                        Competências
                    </ChakraHeading>
                    <Skills skills={project.skills} />
                </Box>
                <Box mb="baseline-2" as="section">
                    <ChakraHeading
                        as="h2"
                        fontSize={['2xl', null, null, '2xl-lg']}
                        lineHeight={['baseline-3', null, null, 'baseline-3-lg']}
                        mb="baseline-2"
                    >
                        Acesse o projeto
                    </ChakraHeading>
                    <VStack align="flex-start" spacing="baseline-1">
                        <Link
                            href={project.repositoryUrl}
                            isExternal
                            fontSize={['md', null, null, 'md-lg']}
                            lineHeight={[
                                'baseline-2',
                                null,
                                null,
                                'baseline-2-lg',
                            ]}
                        >
                            Repositório
                        </Link>
                        <Link
                            href={project.previewUrl}
                            isExternal
                            fontSize={['md', null, null, 'md-lg']}
                            lineHeight={[
                                'baseline-2',
                                null,
                                null,
                                'baseline-2-lg',
                            ]}
                        >
                            Demonstração
                        </Link>
                    </VStack>
                </Box>
            </article>
        </>
    )
}
