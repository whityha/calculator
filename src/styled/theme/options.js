import { COLORS } from './config';

const colors = {
    primary: COLORS.blue,
    secondary: COLORS.lightBlue,
    blue: COLORS.blue,
    lightBlue: COLORS.lightBlue,
    lightGrey: COLORS.lightGrey,
    orange: COLORS.orange,
    white: COLORS.white,
    black: COLORS.black,
};

const background = {
    primary: COLORS.white,
    secondary: COLORS.blue,
    special: COLORS.orange,
    lightBlue: COLORS.lightBlue,
};

const fontSize = {
    main: '24',
    secondary: '16',
};

const heightPercent = {
    0: '0%',
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%',
};

const height = {
    auto: 'auto',
    sm: '30',
    md: '70',
    max: '100',
};

const gridSizes = {
    xsm: '1fr',
    sm: '2fr',
    md: '5fr',
    xmd: '6fr',
    lg: '7fr',
};
const width = {
    none: '0%',
    min: '20%',
    md: '50%',
    lg: '85%',
    max: '100%',
};
const border = {
    original: `1px solid ${colors.black}`,
};
const gap = {
    main: '20',
};
const textShadow = {
    main: `0px 0px 10px`,
};
const maxWidth = {
    lg: '80%',
};
const padding = {
    p0: '0',
    p1: '10',
    p2: '20',
    p3: '30',
    p4: '40',
    p5: '50',
};

export {
    background,
    border,
    colors,
    fontSize,
    gap,
    gridSizes,
    height,
    heightPercent,
    maxWidth,
    padding,
    textShadow,
    width,
};
