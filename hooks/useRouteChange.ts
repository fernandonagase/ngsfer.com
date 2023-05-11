import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function useRouteChange(callback: () => void) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => {
            callback()
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router, callback])
}
