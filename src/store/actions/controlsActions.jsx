import { MAKE_ACTUAL, SWITCH_THEME } from './type';

export const setActualDig = (payload) => ({
    type: MAKE_ACTUAL,
    payload,
});
export const switchTheme = (payload) => ({
    type: SWITCH_THEME,
    payload,
});
