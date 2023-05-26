import buildBaseline from '@/theme/util/build-baseline'
import buildTypeScale from '@/theme/util/build-typescale'
import theme from '../theme'
import { gelasio, poppins } from '../util/nextjs-fonts'

const fonts = {
    body: gelasio.style.fontFamily,
    heading: poppins.style.fontFamily,
}
const fontSizes = buildTypeScale(theme.typeBaseSize, theme.typeScale)
const lineHeights = buildBaseline(theme.baseline, 8)

const typography = {
    fonts,
    fontSizes,
    lineHeights,
}

export default typography
