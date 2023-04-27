import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Início - Fernando Nagase</title>
            </Head>

            <h1>Sou o Fernando, muito prazer!</h1>
            <p>
                Sou graduado em Engenharia de Software pela Universidade de
                Ribeirão Preto (Unaerp) e, atualmente, dedico os meus esforços
                para a área de desenvolvimento full stack para a web.
            </p>
            <nav>
                <p>
                    Visite o <Link href="/portfolio">meu portfólio</Link> para
                    conferir minhas competências ou o{' '}
                    <Link href="/blog">meu blog</Link> para acompanhar a minha
                    jornada de aprendizado com Engenharia de Software.
                </p>
            </nav>
        </>
    )
}
