import {
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
    CHANGE_SIGN,
    CLEAR_CURRENT,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    CLEAR_ALL,
    START_EXPRESSION,
} from './type';

export const startExpression = (payload) => {
    return {
        type: START_EXPRESSION,
        payload,
    };
};

export const drawDisplay = (payload = {}) => {
    return {
        type: DRAW_DISPLAY,
        payload,
    };
};
export const drawHistoryDisplay = (payload) => {
    return {
        type: DRAW_HISTORY_DISPLAY,
        payload,
    };
};
export const changeSign = (payload) => {
    return {
        type: CHANGE_SIGN,
        payload,
    };
};
export const clear = (payload) => {
    return {
        type: CLEAR_CURRENT,
        payload,
    };
};
export const clearDisplay = (payload) => {
    return {
        type: CLEAR_DISPLAY,
        payload,
    };
};
export const clearHistory = (payload) => {
    return {
        type: CLEAR_HISTORY,
        payload,
    };
};
export const clearAll = (payload) => {
    return {
        type: CLEAR_ALL,
        payload,
    };
};
