import { defineStyleConfig } from '@chakra-ui/react'

const defaultFocusedStyles = {
    backgroundColor: 'yellow.100',
    borderBlockStart: '1px solid var(--chakra-colors-gray-400)',
    borderBlockEnd: '1px solid var(--chakra-colors-gray-400)',
}

const navigationFocusedStyles = {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'primary.700',
    textDecoration: 'underline',
}

export default defineStyleConfig({
    baseStyle: {
        textDecoration: 'underline',
        color: 'primary.400',
        _hover: defaultFocusedStyles,
        _focusVisible: defaultFocusedStyles,
    },
    variants: {
        navigation: {
            textDecoration: 'none',
            color: 'fg',
            _hover: navigationFocusedStyles,
            _focusVisible: navigationFocusedStyles,
        },
    },
})
