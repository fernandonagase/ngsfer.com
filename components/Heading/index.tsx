import { Box, useTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    textStyle?: string
    // a interface do componente Heading considera cada incremento em
    // marginBottom um incremento de um "baseline size"
    marginBottom?: number
}

export default function Heading(props: HeadingProps) {
    const {
        children,
        level = 1,
        textStyle = 'typescale-7',
        marginBottom = 3,
    } = props

    const theme = useTheme()

    return (
        <Box
            as={`h${level}`}
            fontWeight={600}
            fontFamily={theme.fonts.heading}
            textStyle={textStyle}
            mb={[
                `baseline-${marginBottom}`,
                null,
                null,
                `baseline-${marginBottom}-lg`,
            ]}
        >
            {children}
        </Box>
    )
}
