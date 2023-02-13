import COLORS from './config';
import * as OPTIONS from './options';

const theme = {
    light: {
        value: 'light',
        ...OPTIONS,
        colorPrimary: COLORS.blue,
        backgroundPrimary: COLORS.white,
        textShadow: `0px 0px 10px ${COLORS.blue}`,
    },
    dark: {
        value: 'dark',
        ...OPTIONS,
        colorPrimary: COLORS.white,
        backgroundPrimary: COLORS.blue,
        textShadow: `0px 0px 10px ${COLORS.white}`,
    },
    colored: {
        value: 'colored',
        ...OPTIONS,
    },
};

export default theme;
