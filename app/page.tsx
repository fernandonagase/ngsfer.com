import { Metadata } from 'next'

import HomePage from '@/app/home-page'

export const metadata: Metadata = {
    title: 'Sou o Fernando Nagase, muito prazer!',
    description:
        'Este é o meu site profissional, onde apresento a minha jornada como engenheiro de software. Aqui, você poderá conhecer mais sobre mim, sobre minhas competências e sobre minhas experiências de aprendizado.',
}

export default function Home() {
    return <HomePage />
}
