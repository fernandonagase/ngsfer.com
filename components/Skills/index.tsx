import { Stack, Tag } from '@chakra-ui/react'

type SkillsProps = {
    skills: string[]
}

export default function Skills(props: SkillsProps) {
    const { skills } = props

    return (
        <Stack direction="row" spacing={1}>
            {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
            ))}
        </Stack>
    )
}
