import { SWITCH_THEME, TOGGLE_HISTORY_MODULE } from './type';

export const switchTheme = (payload) => ({
    type: SWITCH_THEME,
    payload,
});

export const toggleShowHistory = (payload) => ({
    type: TOGGLE_HISTORY_MODULE,
    payload,
});
