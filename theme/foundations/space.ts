import buildBaseline from '../util/build-baseline'
import theme from '../theme'

const baselineValues = buildBaseline(theme.baseline, 8)
const space = { ...baselineValues }

export default space
