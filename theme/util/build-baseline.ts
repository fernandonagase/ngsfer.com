export default function buildBaseline(baseline: number, limit: number) {
    let values = {}
    for (let i = 1; i <= limit; i++) {
        values = { ...values, [`baseline-${i}`]: `${i * baseline}rem` }
    }
    return values
}
