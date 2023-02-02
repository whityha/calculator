import { createAction } from '@reduxjs/toolkit';

export const drawDisplay = createAction('DRAW_DISPLAY');
export const drawHistoryDisplay = createAction('DRAW_HISTORY_DISPLAY');
export const clear = createAction('CLEAR');
export const registerCommand = createAction('REGISTER_COMMAND');
