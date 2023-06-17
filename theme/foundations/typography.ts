import buildBaseline from '@/theme/util/build-baseline'
import buildTypeScale from '@/theme/util/build-typescale'
import theme from '../theme'
import { gelasio, poppins } from '../util/nextjs-fonts'

const fonts = {
    body: gelasio.style.fontFamily,
    heading: poppins.style.fontFamily,
}
const fontSizes = {
    ...buildTypeScale(theme.typeBaseSize, theme.typeScale),
    ...buildTypeScale(theme.typeBaseSizeLg, theme.typeScaleLg, 'lg'),
}
const lineHeights = {
    ...buildBaseline(theme.baseline, 8),
    ...buildBaseline(theme.baselineLg, 8, 'lg'),
}

const textStyles = {
    'typescale-8': {
        fontSize: ['3xl', null, null, '3xl-lg'],
        lineHeight: ['baseline-3', null, null, 'baseline-4-lg'],
    },
}

const typography = {
    fonts,
    fontSizes,
    lineHeights,
    textStyles,
}

export default typography
