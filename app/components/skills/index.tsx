import { poppins } from '@/theme/util/nextjs-fonts'
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
                    fontSize={['xs', null, null, 'xs-lg']}
                    fontFamily={poppins.style.fontFamily}
                    key={skill}
                >
                    {skill}
                </Tag>
            ))}
        </Stack>
    )
}
