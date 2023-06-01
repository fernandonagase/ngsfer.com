export default function buildTypeScale(
    baseSize: number,
    scale: number,
    breakpoint?: string
) {
    let chakraSizes = ['xs', 'sm', 'md', 'lg', 'xl']
    for (let i = 2; i <= 9; i++) {
        chakraSizes.push(`${i}xl`)
    }
    const suffix = breakpoint ? `-${breakpoint}` : ''

    let values = {}
    for (let i = -2; i < chakraSizes.length - 2; i++) {
        values = {
            ...values,
            [`${chakraSizes[i + 2]}${suffix}`]: `${(
                baseSize * Math.pow(scale, i)
            ).toFixed(3)}rem`,
        }
    }

    return values
}
