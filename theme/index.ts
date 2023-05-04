import { extendTheme } from '@chakra-ui/react'

import semanticTokens from './semanticTokens'
import styles from './styles'

import colors from './foundations/colors'
import typography from './foundations/typography'

import Container from './components/container'
import Link from './components/link'

const overrides = {
    semanticTokens,
    styles,
    textStyles: typography,
    colors,
    components: {
        Container,
        Link,
    },
}

export default extendTheme(overrides)
