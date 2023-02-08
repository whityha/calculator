import { MAKE_ACTUAL, SWITCH_THEME } from './type';

export const setActualDig = (payload) => {
    return {
        type: MAKE_ACTUAL,
        payload,
    };
};
export const switchTheme = (payload) => {
    return {
        type: SWITCH_THEME,
        payload,
    };
};
