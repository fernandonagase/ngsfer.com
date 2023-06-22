import { Link, useTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

function getFirstPath(path: string) {
    return path.substring(1).split('/')[0]
}

type NavigationItemProps = {
    label: string
    location: string
}

export default function NavigationItem({
    label,
    location,
}: NavigationItemProps) {
    const { pathname } = useRouter()
    const active = getFirstPath(location) === getFirstPath(pathname)
    const theme = useTheme()

    return (
        <Link
            href={location}
            aria-current={active ? 'page' : undefined}
            variant={active ? 'navigationActive' : 'navigation'}
            fontFamily={theme.fonts.auxiliary}
            textStyle="typescale-2"
            /*
                Solução para manter cada item com tamanho inicial igual ao
                tamanho do texto em negrito, visando impedir que o item que
                está ativo atualmente aumente a largura e desloque os itens
                vizinhos.
            */
            _before={{
                content: `"${label}"`,
                fontWeight: 700,
                display: 'block',
                height: 0,
                visibility: 'hidden',
            }}
            display="inline-block"
            textAlign="center"
            as={NextLink}
        >
            {label}
        </Link>
    )
}
