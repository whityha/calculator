import {
    CHANGE_SIGN,
    CLEAR_ALL,
    CLEAR_CURRENT,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
    START_EXPRESSION,
} from './type';

export const startExpression = (payload) => ({
    type: START_EXPRESSION,
    payload,
});

export const drawDisplay = (payload = {}) => ({
    type: DRAW_DISPLAY,
    payload,
});
export const drawHistoryDisplay = (payload) => ({
    type: DRAW_HISTORY_DISPLAY,
    payload,
});
export const changeSign = (payload) => ({
    type: CHANGE_SIGN,
    payload,
});
export const clear = (payload) => ({
    type: CLEAR_CURRENT,
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
