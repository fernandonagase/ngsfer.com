import { extendTheme } from '@chakra-ui/react'

import typography from './foundations/typography'
import Container from './components/container'
import Link from './components/link'

const overrides = {
    textStyles: typography,
    components: {
        Container,
        Link,
    },
}

export default extendTheme(overrides)
