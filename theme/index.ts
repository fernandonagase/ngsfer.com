import { extendTheme } from '@chakra-ui/react'
import Link from './components/link'

const overrides = {
    components: {
        Link,
    },
}

export default extendTheme(overrides)
