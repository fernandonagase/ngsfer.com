import { Gelasio, Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const gelasio = Gelasio({
    weight: ['400'],
    subsets: ['latin'],
})

const typography = {
    h1: {
        fontSize: '4.219rem',
        lineHeight: '5.25rem',
        fontWeight: '700',
        fontFamily: poppins.style.fontFamily,
        marginBlockEnd: '1.75rem',
    },
    h2: {
        fontSize: '2.813rem',
        lineHeight: '3.5rem',
        fontWeight: '700',
        fontFamily: poppins.style.fontFamily,
        marginBlockEnd: '1.75rem',
    },
    h3: {
        fontSize: '1.875rem',
        lineHeight: '3.5rem',
        fontWeight: '700',
        fontFamily: poppins.style.fontFamily,
        marginBlockEnd: '1.75rem',
    },
    body: {
        fontSize: '1.25rem',
        fontFamily: gelasio.style.fontFamily,
        lineHeight: '1.75rem',
        marginBlockEnd: '1.75rem',
    },
    title: {
        fontSize: '2rem',
        fontFamily: poppins.style.fontFamily,
        fontWeight: '700',
    },
}

export default typography
