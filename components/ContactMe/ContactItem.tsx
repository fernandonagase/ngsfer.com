import { Link } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ContactItemProps = {
    children: ReactNode
    url: string
    name?: string
}

export default function ContactItem({ children, url, name }: ContactItemProps) {
    return (
        <Link
            href={url}
            isExternal
            variant="navigation"
            fontSize="3xl"
            display="inline-block"
            padding={2}
            aria-label={name}
        >
            {children}
        </Link>
    )
}
