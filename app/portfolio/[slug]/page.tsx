import { cache } from 'react'

import { getPaths, getProjectFrom } from '@/lib/portfolio'
import ProjectPage from './project-page'

const fetchProject = cache(async (slug: string) => {
    const project = await getProjectFrom(slug)
    return project
})

type Parameters = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Parameters) {
    const project = await fetchProject(params.slug)

    return {
        title: project.name,
        description: project.description,
    }
}

export async function generateStaticParams() {
    const paths = await getPaths()
    return paths.map((path) => ({
        slug: path,
    }))
}

type ProjectProps = Parameters

export default async function Project({ params }: ProjectProps) {
    const project = await fetchProject(params.slug)

    return <ProjectPage project={project} />
}
