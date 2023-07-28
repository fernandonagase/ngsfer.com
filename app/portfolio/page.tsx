import { Metadata } from 'next'

import PortfolioPage from './portfolio-page'
import { getAllProjects } from '@/lib/portfolio'

async function fetchProjects() {
    const projects = await getAllProjects()
    return projects.sort((a, b) => a.slug.localeCompare(b.slug))
}

export const metadata: Metadata = {
    title: 'Portfólio - Fernando Nagase',
    description:
        'Listagem com detalhes sobre meus projetos de software. Aqui, você poderá conferir minhas competências como desenvolvedor.',
}

export default async function Portfolio() {
    const projects = await fetchProjects()

    return <PortfolioPage projects={projects} />
}
