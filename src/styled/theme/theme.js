import { COLORS } from './config';
import * as OPTIONS from './options';

const theme = {
    light: {
        value: 'light',
        ...OPTIONS,
        colorPrimary: COLORS.blue,
        backgroundPrimary: COLORS.white,
        colorShadow: COLORS.blue,
    },
    dark: {
        value: 'dark',
        ...OPTIONS,
        colorPrimary: COLORS.white,
        backgroundPrimary: COLORS.blue,
        colorShadow: COLORS.white,
    },
    colored: {
        value: 'colored',
        ...OPTIONS,
    },
};

export default theme;
