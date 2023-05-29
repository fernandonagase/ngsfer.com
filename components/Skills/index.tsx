import { Stack, Tag } from '@chakra-ui/react'

type SkillsProps = {
    skills: string[]
}

export default function Skills(props: SkillsProps) {
    const { skills } = props

    return (
        <Stack direction="row" spacing={1}>
            {skills.map((skill) => (
                <Tag
                    borderRadius="none"
                    variant="outline"
                    color="fg"
                    key={skill}
                >
                    {skill}
                </Tag>
            ))}
        </Stack>
    )
}
