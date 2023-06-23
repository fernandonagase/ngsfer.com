import buildBaseline from '@/theme/util/build-baseline'
import buildTypeScale from '@/theme/util/build-typescale'
import theme from '../theme'
import { gelasio, poppins } from '../util/nextjs-fonts'

const fonts = {
    body: gelasio.style.fontFamily,
    heading: poppins.style.fontFamily,
    auxiliary: poppins.style.fontFamily,
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
    'typescale-1': {
        fontSize: ['xs', null, null, 'xs-lg'],
        lineHeight: ['baseline-1', null, null, 'baseline-1-lg'],
    },
    'typescale-2': {
        fontSize: ['sm', null, null, 'sm-lg'],
        lineHeight: ['baseline-2', null, null, 'baseline-2-lg'],
    },
    'typescale-3': {
        fontSize: ['md', null, null, 'md-lg'],
        lineHeight: ['baseline-2', null, null, 'baseline-2-lg'],
    },
    'typescale-4': {
        fontSize: ['lg', null, null, 'lg-lg'],
        lineHeight: ['baseline-2', null, null, 'baseline-2-lg'],
    },
    'typescale-5': {
        fontSize: ['xl', null, null, 'xl-lg'],
        lineHeight: ['baseline-2', null, null, 'baseline-3-lg'],
    },
    'typescale-6': {
        fontSize: ['2xl', null, null, '2xl-lg'],
        lineHeight: ['baseline-3', null, null, 'baseline-3-lg'],
    },
    'typescale-7': {
        fontSize: ['3xl', null, null, '3xl-lg'],
        lineHeight: ['baseline-3', null, null, 'baseline-4-lg'],
    },
    'typescale-8': {
        fontSize: ['4xl', null, null, '4xl-lg'],
        lineHeight: ['baseline-4', null, null, 'baseline-5-lg'],
    },
    'typescale-9': {
        fontSize: ['5xl', null, null, '5xl-lg'],
        lineHeight: ['baseline-4', null, null, 'baseline-6-lg'],
    },
    'typescale-10': {
        fontSize: ['6xl', null, null, '6xl-lg'],
        lineHeight: ['baseline-5', null, null, 'baseline-7-lg'],
    },
    'typescale-11': {
        fontSize: ['7xl', null, null, '7xl-lg'],
        lineHeight: ['baseline-6', null, null, 'baseline-8-lg'],
    },
    'typescale-12': {
        fontSize: ['8xl', null, null, '8xl-lg'],
        lineHeight: ['baseline-7', null, null, '9.38rem'],
    },
    'typescale-13': {
        fontSize: ['9xl', null, null, '9xl-lg'],
        lineHeight: ['7.56rem', null, null, '12.194rem'],
    },
}

const typography = {
    fonts,
    fontSizes,
    lineHeights,
    textStyles,
}

export default typography
