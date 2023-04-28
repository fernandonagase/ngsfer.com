import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
    variants: {
        underline: {
            textDecoration: 'underline',
        },
        nounderline: {
            textDecoration: 'none',
        },
    },
    defaultProps: {
        variant: 'underline',
    },
})
