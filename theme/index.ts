import { extendTheme } from '@chakra-ui/react'

import space from './foundations/space'
import typography from './foundations/typography'

const overrides = { space, ...typography }

export default extendTheme(overrides)
