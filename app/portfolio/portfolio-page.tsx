'use client'

import { Stack } from '@chakra-ui/react'

import BodyText from '@/components/BodyText'
import Heading from '@/components/Heading'
import ProjectCard from '@/components/ProjectCard'
import { ProjectSummary } from '@/lib/portfolio/types/project-summary'

type PortfolioProps = {
    projects: ProjectSummary[]
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
