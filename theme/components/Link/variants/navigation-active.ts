import { defineStyle } from '@chakra-ui/react'

const focusedStyles = {
    textDecoration: 'none',
}

const navigationActiveLink = defineStyle({
    textDecoration: 'none',
    fontWeight: '700',
    borderBottom: '2px solid var(--chakra-colors-primary-400)',
    color: 'fg',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default navigationActiveLink
