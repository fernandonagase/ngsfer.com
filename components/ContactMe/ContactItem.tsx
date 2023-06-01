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
            fontSize={['md', null, null, 'md-lg']}
            lineHeight={['baseline-2', null, null, 'baseline-2-lg']}
            variant="navigation"
            color="primary.400"
        >
            {children}
        </Link>
    )
}
