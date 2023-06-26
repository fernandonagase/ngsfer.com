import { defineStyle } from '@chakra-ui/react'

const focusedStyles = defineStyle({
    textDecoration: 'underline',
    color: 'primary.700',
})

const backLink = defineStyle({
    fontFamily: 'auxiliary',
    textStyle: 'typescale-3',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default backLink
