import { Link } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ContactItemProps = {
    children: ReactNode
    url: string
}

export default function ContactItem({ children, url }: ContactItemProps) {
    return (
        <Link
            href={url}
            isExternal
            fontSize="md"
            lineHeight="baseline-2"
            variant="navigation"
        >
            {children}
        </Link>
    )
}
