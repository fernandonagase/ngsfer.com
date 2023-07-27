'use client'

import { Link, Box, Icon } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import { HiOutlineExternalLink } from 'react-icons/hi'

import BodyText from '@/components/BodyText'
import Heading from '@/components/Heading'

export default function HomePage() {
    return (
        <>
            <Heading textStyle="typescale-6">
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
                    <NextLink href="/portfolio">meu portfólio</NextLink> para
                    conferir minhas competências ou o{' '}
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
