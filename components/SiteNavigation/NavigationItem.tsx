import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type NavigationItemProps = {
    children: ReactNode
    location: string
}

export default function NavigationItem({
    children,
    location,
}: NavigationItemProps) {
    return (
        <Link
            href={location}
            variant="navigation"
            textStyle="body"
            as={NextLink}
        >
            {children}
        </Link>
    )
}
