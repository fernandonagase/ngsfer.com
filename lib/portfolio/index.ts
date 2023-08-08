import { promises as fs } from 'fs'
import path from 'path'

import { Project } from './types/project'

const projectsDir = path.join(process.cwd(), 'content', 'portfolio')

export async function getAllProjects() {
    const files = await fs.readdir(projectsDir, 'utf-8')
    const projects = await Promise.all(files.map(getProjectFrom))
    return projects
}

async function getProjectFrom(slug: string): Promise<Project> {
    const projectJson = await fs.readFile(
        path.resolve(projectsDir, `${slug}/details.json`),
        'utf-8',
    )
    const projectContent = JSON.parse(projectJson)
    return { slug, ...projectContent }
}
