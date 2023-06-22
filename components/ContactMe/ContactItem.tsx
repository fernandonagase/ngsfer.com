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
            textStyle="typescale-2"
            variant="navigation"
            color="primary.400"
        >
            {children}
        </Link>
    )
}
