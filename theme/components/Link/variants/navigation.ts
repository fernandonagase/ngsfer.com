import { defineStyle } from '@chakra-ui/react'

const focusedStyles = defineStyle({
    textDecoration: 'underline',
    color: 'primary.700',
})

const navigationLink = defineStyle({
    textDecoration: 'none',
    color: 'fg',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default navigationLink
