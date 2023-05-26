import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import Skills from '../Skills'

type ProjectCardProps = {
    slug: string
    name: string
    description: string
    skills: string[]
}

export default function ProjectCard({
    slug,
    name,
    description,
    skills,
}: ProjectCardProps) {
    return (
        <LinkBox as="article" mb="baseline-2">
            <Heading as="h2">
                <LinkOverlay href={`portfolio/${slug}`} as={NextLink}>
                    {name}
                </LinkOverlay>
            </Heading>
            <Text noOfLines={2}>{description}</Text>
            <Skills skills={skills} />
        </LinkBox>
    )
}
