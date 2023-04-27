import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
    variants: {
        underline: {
            textDecoration: 'underline',
        },
    },
    defaultProps: {
        variant: 'underline',
    },
})
