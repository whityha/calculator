import { COLORS } from './config';
import * as OPTIONS from './options';

const theme = {
    light: {
        value: 'light',
        ...OPTIONS,
        colorPrimary: COLORS.blue,
        colorSecondary: COLORS.blue,
        backgroundPrimary: COLORS.white,
        backgroundSecondary: COLORS.white,
        colorShadow: COLORS.blue,
    },
    dark: {
        value: 'dark',
        ...OPTIONS,
        colorPrimary: COLORS.white,
        colorSecondary: COLORS.white,
        backgroundPrimary: COLORS.blue,
        backgroundSecondary: COLORS.lightBlue,
        colorShadow: COLORS.white,
    },
    colored: {
        value: 'colored',
        ...OPTIONS,
        colorPrimary: COLORS.darkAqua,
        colorSecondary: COLORS.aqua,
        backgroundPrimary: COLORS.aqua,
        backgroundSecondary: COLORS.black,
        colorShadow: COLORS.white,
    },
};

export default theme;
