import { createAction } from '@reduxjs/toolkit';

export const drawDisplay = createAction('DRAW_DISPLAY');
export const drawHistoryDisplay = createAction('DRAW_HISTORY_DISPLAY');
export const changeSign = createAction('CHANGE_SIGN');
export const clear = createAction('CLEAR_CURRENT');
export const clearDisplay = createAction('CLEAR_DISPLAY');
export const clearHistory = createAction('CLEAR_HISTORY');
export const clearAll = createAction('CLEAR_ALL');
