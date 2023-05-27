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
            fontSize="md"
            lineHeight="baseline-2"
            variant="navigation"
            as={NextLink}
        >
            {children}
        </Link>
    )
}
