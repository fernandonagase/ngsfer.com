import ProjectCard from '@/components/ProjectCard'
import BodyText from '@/components/foundations/BodyText'
import Heading from '@/components/foundations/Heading'
import { ProjectSummary, getAllProjects } from '@/util/portfolio'

import { Stack } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps<{
    projects: ProjectSummary[]
}> = async () => {
    const projects = await getAllProjects()
    return {
        props: {
            projects: projects.sort((a, b) => a.slug.localeCompare(b.slug)),
        },
    }
}

export default function Portfolio({
    projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Portfólio - Fernando Nagase</title>
                <meta
                    name="description"
                    content="Listagem com detalhes sobre meus projetos de software. Aqui, você poderá conferir minhas competências como desenvolvedor."
                />
            </Head>
            <Heading level="h1">Portfólio</Heading>
            {projects.length > 0 ? (
                <Stack spacing="1xSm">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            name={project.name}
                            description={project.description}
                            skills={project.skills}
                        />
                    ))}
                </Stack>
            ) : (
                <BodyText>Nenhum projeto publicado</BodyText>
            )}
        </>
    )
}
