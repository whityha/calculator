import {
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY,
    DRAW_HISTORY_DISPLAY,
} from './type';

export const setDisplayValue = (payload) => ({
    type: DRAW_DISPLAY,
    payload,
});
export const addItemInHistoryList = (payload) => ({
    type: DRAW_HISTORY,
    payload,
});
export const setHistoryDisplayValue = (payload) => ({
    type: DRAW_HISTORY_DISPLAY,
    payload,
});
export const clearDisplay = (payload) => ({
    type: CLEAR_DISPLAY,
    payload,
});
export const clearHistoryList = (payload) => ({
    type: CLEAR_HISTORY,
    payload,
});
