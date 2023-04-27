import { Text, Link, Heading, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Início - Fernando Nagase</title>
            </Head>

            <Container>
                <Heading as="h1">Sou o Fernando, muito prazer!</Heading>
                <Text>
                    Sou graduado em Engenharia de Software pela Universidade de
                    Ribeirão Preto (Unaerp) e, atualmente, dedico os meus
                    esforços para a área de desenvolvimento full stack para a
                    web.
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
            </Container>
        </>
    )
}
