import { Link, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Sou o Fernando Nagase, muito prazer!</title>
                <meta
                    name="description"
                    content="Este é o meu site profissional, onde apresento a minha jornada como engenheiro de software. Aqui, você poderá conhecer mais sobre mim, sobre minhas competências e sobre minhas experiências de aprendizado."
                />
            </Head>

            <Heading mb={6}>Sou o Fernando, muito prazer!</Heading>
            <Text mb={6}>
                Sou graduado em Engenharia de Software pela Universidade de
                Ribeirão Preto (Unaerp) e, atualmente, dedico os meus esforços
                para a área de desenvolvimento full stack para a web.
            </Text>
            <nav>
                <Text>
                    Visite o{' '}
                    <Link href="/portfolio" as={NextLink}>
                        meu portfólio
                    </Link>{' '}
                    para conferir minhas competências ou o{' '}
                    <Link href="/blog" as={NextLink}>
                        meu blog
                    </Link>{' '}
                    para acompanhar a minha jornada de aprendizado com
                    Engenharia de Software.
                </Text>
            </nav>
        </>
    )
}
