import { Gelasio, Poppins } from 'next/font/google'

export const gelasio = Gelasio({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
})
