import { defineStyleConfig } from '@chakra-ui/react'

import inline from './variants/inline'
import navigation from './variants/navigation'
import navigationActive from './variants/navigation-active'

export default defineStyleConfig({
    variants: {
        inline,
        navigation,
        navigationActive,
    },
    defaultProps: {
        variant: 'inline',
    },
})
