import { defineStyle } from '@chakra-ui/react'

const focusedStyles = {
    backgroundColor: 'yellow.100',
    color: 'primary.700',
    borderBlock: '1px solid var(--chakra-colors-gray-400)',
}

const inlineLink = defineStyle({
    textDecoration: 'underline',
    color: 'primary.400',
    _hover: focusedStyles,
    _focusVisible: focusedStyles,
})

export default inlineLink
