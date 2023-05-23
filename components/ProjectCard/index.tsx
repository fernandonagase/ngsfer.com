import {
    Box,
    Card,
    CardBody,
    Heading,
    LinkBox,
    LinkOverlay,
    Text,
} from '@chakra-ui/react'
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
        <LinkBox>
            <Card as="article">
                <CardBody>
                    <Box mb="1xSm">
                        <Heading as="h2">
                            <LinkOverlay
                                href={`portfolio/${slug}`}
                                as={NextLink}
                            >
                                {name}
                            </LinkOverlay>
                        </Heading>
                        <Text noOfLines={2}>{description}</Text>
                    </Box>
                    <Skills skills={skills} />
                </CardBody>
            </Card>
        </LinkBox>
    )
}
