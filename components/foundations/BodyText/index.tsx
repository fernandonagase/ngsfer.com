import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type BodyTextProps = {
    children: ReactNode
}

export default function BodyText({ children }: BodyTextProps) {
    return <Text>{children}</Text>
}
