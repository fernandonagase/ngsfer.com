import { extendTheme } from '@chakra-ui/react'

import colors from './foundations/colors'
import sizes from './foundations/sizes'
import space from './foundations/space'
import typography from './foundations/typography'

import Link from './components/link'

const overrides = { colors, sizes, space, ...typography, components: { Link } }

export default extendTheme(overrides)
