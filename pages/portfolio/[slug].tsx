import { Link, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import Skills from '@/components/Skills'
import BodyText from '@/components/foundations/BodyText'
import Heading from '@/components/foundations/Heading'
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
                <Heading level="h1">{project.name}</Heading>
                <BodyText>{project.description}</BodyText>
                <section>
                    <Heading level="h2">Competências</Heading>
                    <Skills skills={project.skills} />
                </section>
                <section>
                    <Heading level="h2">Acesse o projeto</Heading>
                    <VStack align="flex-start">
                        <Link href={project.repositoryUrl} isExternal>
                            Repositório
                        </Link>
                        <Link href={project.previewUrl} isExternal>
                            Demonstração
                        </Link>
                    </VStack>
                </section>
            </article>
        </>
    )
}
