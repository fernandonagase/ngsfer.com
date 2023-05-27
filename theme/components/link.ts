import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
    baseStyle: {
        textDecoration: 'underline',
        color: 'primary.400',
    },
    variants: {
        navigation: {
            textDecoration: 'none',
            color: 'fg',
        },
    },
})
