import { Link, Box, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

import BodyText from '@/components/BodyText'
import Heading from '@/components/Heading'

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

            <Heading>
                <div>
                    Sou o{' '}
                    <Box as="span" color="primary.400">
                        Fernando
                    </Box>
                    ,
                </div>
                muito prazer!
            </Heading>

            <BodyText>
                Sou graduado em Engenharia de Software pela Universidade de
                Ribeirão Preto (Unaerp) e, atualmente, dedico os meus esforços
                para a área de desenvolvimento full stack para a web.
            </BodyText>
            <nav>
                <BodyText>
                    Visite o{' '}
                    <Link href="/portfolio" as={NextLink}>
                        meu portfólio
                    </Link>{' '}
                    para conferir minhas competências ou o{' '}
                    <Link href="https://blog.ngsfer.com" isExternal>
                        meu blog{' '}
                        <Icon
                            as={HiOutlineExternalLink}
                            ml="2px"
                            verticalAlign="middle"
                        />
                    </Link>{' '}
                    para acompanhar a minha jornada de aprendizado com
                    Engenharia de Software.
                </BodyText>
            </nav>
        </>
    )
}
