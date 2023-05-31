import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type NavigationItemProps = {
    children: ReactNode
    location: string
}

export default function NavigationItem({
    children,
    location,
}: NavigationItemProps) {
    const { pathname } = useRouter()
    const active = location === pathname

    return (
        <Link
            href={location}
            fontSize="md"
            lineHeight="baseline-2"
            as={NextLink}
            variant={active ? 'navigationActive' : 'navigation'}
            aria-current={active ? 'page' : undefined}
        >
            {children}
        </Link>
    )
}
