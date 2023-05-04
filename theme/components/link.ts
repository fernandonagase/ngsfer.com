import { defineStyleConfig } from '@chakra-ui/react'

const defaultFocusedStyles = {
    backgroundColor: 'yellow.100',
    borderBlockStart: '1px solid var(--chakra-colors-gray-400)',
    borderBlockEnd: '1px solid var(--chakra-colors-gray-400)',
}

const navigationFocusedStyles = {
    color: 'primary.700',
    textDecoration: 'underline',
}

export default defineStyleConfig({
    baseStyle: {
        textDecoration: 'underline',
    },
    variants: {
        default: {
            color: 'primary.400',
            _hover: defaultFocusedStyles,
            _focus: defaultFocusedStyles,
        },
        navigation: {
            textDecoration: 'none',
            _hover: navigationFocusedStyles,
            _focus: navigationFocusedStyles,
        },
    },
    defaultProps: {
        variant: 'default',
    },
})
