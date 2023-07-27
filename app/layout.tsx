import { ReactNode } from 'react'

import MainLayout from '@/app/layout/main-layout'

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt">
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    )
}
