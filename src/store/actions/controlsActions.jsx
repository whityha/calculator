import { MAKE_ACTUAL, SWITCH_THEME, TOGGLE_HISTORY_MODULE } from './type';

export const setActualDig = (payload) => ({
    type: MAKE_ACTUAL,
    payload,
});

export const togglerShowHistory = (payload) => ({
    type: TOGGLE_HISTORY_MODULE,
    payload,
});

export const switchTheme = (payload) => ({
    type: SWITCH_THEME,
    payload,
});
