import { defineStyle } from '@chakra-ui/react'

const focusedStyles = {
    color: 'primary.700',
    textDecoration: 'underline',
}

const navigationLink = defineStyle({
    textDecoration: 'none',
    color: 'fg',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default navigationLink
