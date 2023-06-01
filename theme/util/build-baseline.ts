export default function buildBaseline(
    baseline: number,
    limit: number,
    breakpoint?: string
) {
    const suffix = breakpoint ? `-${breakpoint}` : ''

    let values = {}
    for (let i = 1; i <= limit; i++) {
        values = {
            ...values,
            [`baseline-${i}${suffix}`]: `${(i * baseline).toFixed(3)}rem`,
        }
    }
    return values
}
