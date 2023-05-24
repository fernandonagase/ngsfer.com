import { Heading, Link, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import Skills from '@/components/Skills'
import { Project, getPaths, getProjectFrom } from '@/util/portfolio'

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
                <Heading as="h1">{project.name}</Heading>
                <Text>{project.description}</Text>
                <section>
                    <Heading as="h2">Competências</Heading>
                    <Skills skills={project.skills} />
                </section>
                <section>
                    <Heading as="h2">Acesse o projeto</Heading>
                    <div>
                        <Link href={project.repositoryUrl} isExternal>
                            Repositório
                        </Link>
                        <Link href={project.previewUrl} isExternal>
                            Demonstração
                        </Link>
                    </div>
                </section>
            </article>
        </>
    )
}
