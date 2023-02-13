import COLORS from './config';

const colors = {
    main: COLORS.blue,
    secondary: COLORS.blue,
    blue: COLORS.blue,
    lightBlue: COLORS.lightBlue,
    lightGrey: COLORS.lightGrey,
    orange: COLORS.orange,
    white: COLORS.white,
    black: COLORS.black,
};
const background = {
    main: COLORS.white,
    secondary: COLORS.blue,
    special: COLORS.orange,
};
const fontSize = {
    main: '24px',
    secondary: '16px',
};
const height = {
    0: '0%',
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%',
    auto: 'auto',
    sm: '30px',
    md: '70px',
    max: '100px',
};

const gridSizes = {
    xsm: '1fr',
    sm: '2fr',
    md: '5fr',
    lg: '7fr',
};
const width = {
    none: '0%',
    max: '100%',
    min: '20%',
    md: '50%',
    lg: '85%',
};
const border = {
    original: `1px solid ${colors.black}`,
};
const gap = {
    main: '20px',
};

const padding = {
    historyListItem: '5px',
    p0: '0px',
    p1: '10px',
    p2: '20px',
    p3: '30px',
    p4: '40px',
    p5: '50px',
};

const theme = {
    dark: {
        background: {
            primary: colors.blue,
            secondary: colors.white,
        },
        color: {
            primary: colors.white,
            secondary: colors.blue,
            border: colors.lightBlue,
        },
    },
    light: {
        background: {
            primary: colors.white,
            secondary: colors.blue,
        },
        color: {
            primary: colors.blue,
            secondary: colors.white,
            border: colors.lightBlue,
        },
    },
};

export {
    background,
    border,
    colors,
    fontSize,
    gap,
    gridSizes,
    height,
    padding,
    theme,
    width,
};
