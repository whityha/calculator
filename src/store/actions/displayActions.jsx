import {
    CLEAR_ALL,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
} from './type';

export const drawDisplay = (payload) => ({
    type: DRAW_DISPLAY,
    payload,
});
export const drawHistoryDisplay = (payload) => ({
    type: DRAW_HISTORY_DISPLAY,
    payload,
});
export const clearDisplay = (payload) => ({
    type: CLEAR_DISPLAY,
    payload,
});
export const clearHistory = (payload) => ({
    type: CLEAR_HISTORY,
    payload,
});
export const clearAll = (payload) => ({
    type: CLEAR_ALL,
    payload,
});
