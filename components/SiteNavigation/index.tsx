import Link from 'next/link'

export default function SiteNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfólio</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre mim</Link>
                </li>
            </ul>
        </nav>
    )
}
