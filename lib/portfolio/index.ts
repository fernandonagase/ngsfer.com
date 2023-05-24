import { promises as fs } from 'fs'
import path from 'path'

import { Project } from './types/project'
import { ProjectSummary } from './types/project-summary'

const projectsDir = path.join(process.cwd(), 'content', 'portfolio')

export async function getAllProjects() {
    const files = await fs.readdir(projectsDir, 'utf-8')
    const projects = await Promise.all(
        files.map(removeFileExtension).map(getProjectFrom)
    )
    return projects.map(getProjectSummary)
}

function getProjectSummary(project: Project): ProjectSummary {
    return (({ slug, name, description, skills }) => ({
        slug,
        name,
        description,
        skills,
    }))(project)
}

export async function getProjectFrom(slug: string): Promise<Project> {
    const projectJson = await fs.readFile(
        path.resolve(projectsDir, `${slug}.json`),
        'utf-8'
    )
    const projectContent = JSON.parse(projectJson)
    return { slug, ...projectContent }
}

export async function getPaths() {
    const files = await fs.readdir(projectsDir, 'utf-8')
    return files.map(removeFileExtension)
}

function removeFileExtension(filename: string) {
    return filename.replace(/\.json$/, '')
}
