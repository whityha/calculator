import {
    ADD_ITEM_HISTORY_LIST,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    SET_DISPLAY_VALUE,
    SET_HISTORY_DISPLAY_VALUE,
} from './type';

export const setDisplayValue = (payload) => ({
    type: SET_DISPLAY_VALUE,
    payload,
});
export const addItemInHistoryList = (payload) => ({
    type: ADD_ITEM_HISTORY_LIST,
    payload,
});
export const setHistoryDisplayValue = (payload) => ({
    type: SET_HISTORY_DISPLAY_VALUE,
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
