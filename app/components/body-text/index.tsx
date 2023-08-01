import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type BodyTextProps = {
    children: ReactNode
}

export default function BodyText(props: BodyTextProps) {
    return (
        <Text
            textStyle="typescale-3"
            mb={['baseline-2', null, null, 'baseline-2-lg']}
        >
            {props.children}
        </Text>
    )
}
