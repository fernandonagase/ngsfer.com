'use client'

import { Stack } from '@chakra-ui/react'

import BodyText from '@/app/components/body-text'
import Heading from '@/app/components/heading'
import ProjectCard from '@/app/components/project-card'
import { Project } from '@/lib/portfolio/types/project'

type PortfolioProps = {
    projects: Project[]
}

export default function PortfolioPage({ projects }: PortfolioProps) {
    return (
        <>
            <Heading textStyle="typescale-6">Portfólio</Heading>
            {projects.length > 0 ? (
                <Stack spacing={['baseline-3', null, null, 'baseline-3-lg']}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            name={project.name}
                            description={project.description}
                            skills={project.skills}
                            repositoryUrl={project.repositoryUrl}
                            previewUrl={project.previewUrl}
                        />
                    ))}
                </Stack>
            ) : (
                <BodyText>Nenhum projeto publicado</BodyText>
            )}
        </>
    )
}
