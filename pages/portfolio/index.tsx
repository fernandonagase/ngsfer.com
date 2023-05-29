import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/lib/portfolio'
import { ProjectSummary } from '@/lib/portfolio/types/project-summary'

import { Heading, Stack, Text } from '@chakra-ui/react'
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

            <Heading
                as="h1"
                fontSize="4xl"
                lineHeight="baseline-4"
                color="fg"
                mb="baseline-4"
            >
                Portfólio
            </Heading>
            {projects.length > 0 ? (
                <Stack>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            name={project.name}
                            description={project.description}
                        />
                    ))}
                </Stack>
            ) : (
                <Text color="fg" fontSize="md" lineHeight="baseline-2">
                    Nenhum projeto publicado
                </Text>
            )}
        </>
    )
}
