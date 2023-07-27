import { Metadata } from 'next'

import AboutPage from '@/app/sobre/about-page'

export const metadata: Metadata = {
    title: 'Sobre mim - Fernando Nagase',
    description:
        'Conheça um pouco mais sobre a minha história com engenharia de software.',
}

export default function About() {
    return <AboutPage />
}
