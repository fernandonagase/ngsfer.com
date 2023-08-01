'use client'

import { Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'

import BodyText from '@/app/components/body-text'
import Heading from '@/app/components/heading'

export default function AboutPage() {
    return (
        <>
            <Heading textStyle="typescale-6">Sobre mim</Heading>
            <BodyText>
                O meu interesse pelo mundo da computação se manifestou desde
                quando eu era pequeno, extremamente motivado a criar os meus
                próprios códigos após entrar em contato com o vasto mundo de
                websites e videogames.
            </BodyText>
            <BodyText>
                Pude experimentar inúmeras linguagens de programação,{' '}
                <i lang="en">frameworks</i> e outras ferramentas de
                desenvolvimento, e mantive a minha paixão viva — enquanto um
                aficionado por programação — até o momento em que resolvi
                transformá-la na minha profissão: ingressei no curso de
                Engenharia de Software pela Universidade de Ribeirão Preto
                (Unaerp) aos 17 anos, no ano de 2018.
            </BodyText>
            <BodyText>
                Devo confessar que, naquela época, não sabia ao certo do que se
                tratava o curso que escolhi, tampouco sabia sobre o caminho que
                estava percorrendo. Para dizer a verdade, eu sempre fui uma
                pessoa tímida, e acreditava que, ao trabalhar com programação,
                não precisaria ter contato com tantas pessoas... Acho que você
                já sabe o quão enganado eu estava 😳.
            </BodyText>
            <BodyText>
                Para a minha surpresa, essa quebra de expectativa nunca foi um
                motivo de pânico, muito pelo contrário, eu passei a valorizar
                cada vez mais o <b>aspecto humano</b> inerente à engenharia de
                software. Por esse motivo, tenho me interessado cada vez mais
                por temas como acessibilidade, experiência de usuário e
                performance aplicadas à web.
            </BodyText>
            <BodyText>
                Atualmente, meu principal objetivo é ingressar no mercado de
                desenvolvimento web utilizando tecnologias como React (Next.js),
                Java (Spring Boot) e Node (Express). Você pode conhecer o meu
                trabalho visitando o meu{' '}
                <NextLink href="/portfolio">portfólio</NextLink> e o meu{' '}
                <Link href="https://blog.ngsfer.com" isExternal>
                    blog
                </Link>
                .
            </BodyText>
        </>
    )
}
