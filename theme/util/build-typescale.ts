export default function buildTypeScale(baseSize: number, scale: number) {
    let chakraSizes = ['xs', 'sm', 'md', 'lg', 'xl']
    for (let i = 2; i <= 9; i++) {
        chakraSizes.push(`${i}xl`)
    }

    let values = {}
    for (let i = -2; i < chakraSizes.length - 2; i++) {
        values = {
            ...values,
            [chakraSizes[i + 2]]: `${(baseSize * Math.pow(scale, i)).toFixed(
                3
            )}rem`,
        }
    }

    return values
}
