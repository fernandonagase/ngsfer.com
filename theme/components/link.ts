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

const navigationActiveFocusedStyles = {
    textDecoration: 'none',
    border: 'none',
    borderBottom: '4px solid var(--chakra-colors-fg)',
    backgroundColor: 'transparent',
    color: 'fg',
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
        navigationActive: {
            textDecoration: 'none',
            fontWeight: '700',
            color: 'fg',
            borderBottom: '4px solid var(--chakra-colors-fg)',
            _hover: navigationActiveFocusedStyles,
            _focusVisible: navigationActiveFocusedStyles,
        },
    },
})
