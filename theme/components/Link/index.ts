import { defineStyleConfig } from '@chakra-ui/react'

import inline from './variants/inline'
import navigation from './variants/navigation'
import navigationActive from './variants/navigation-active'
import back from './variants/back'

export default defineStyleConfig({
    baseStyle: {
        _focusVisible: {
            boxShadow: 'none',
            outline: '3px solid var(--chakra-colors-primary-200)',
        },
    },
    variants: {
        inline,
        navigation,
        navigationActive,
        back,
    },
    defaultProps: {
        variant: 'inline',
    },
})
