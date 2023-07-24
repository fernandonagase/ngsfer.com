import { defineStyle } from '@chakra-ui/react'

const focusedStyles = {
    textDecoration: 'none',
}

const navigationActiveLink = defineStyle({
    textDecoration: 'none',
    fontWeight: '600',
    backgroundColor: 'fg',
    color: 'white',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default navigationActiveLink
