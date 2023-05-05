import { Gelasio } from 'next/font/google'

const gelasio = Gelasio({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const styles = {
    global: {
        body: {
            color: 'body-text',
            fontFamily: gelasio.style.fontFamily,
        },
    },
}

export default styles
