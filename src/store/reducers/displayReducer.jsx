import { createReducer } from '@reduxjs/toolkit';
import {
    drawDisplay,
    clear,
    drawHistoryDisplay,
    changeSign,
    clearDisplay,
    clearAll,
    clearHistory,
} from '@actions/displayActions';
import { calc } from '@command/command';
import initialState from '../initialState';

export default createReducer(initialState, {
    [drawDisplay]: (state, { payload }) => {
        const { value, resultHistoryValue = state.historyValue } = payload;
        state.value = value;
        state.historyValue = resultHistoryValue;
    },
    [clear]: (state) => {
        state.value = 0;
    },
    [clearDisplay]: (state) => {
        state.value = 0;
        state.historyValue = '';
        calc.clear();
    },
    [clearAll]: (state) => {
        state.value = 0;
        state.historyValue = '';
        calc.clear();
        state.formulas = [];
    },
    [clearHistory]: (state) => {
        state.formulas = [];
    },
    [changeSign]: (state, { payload }) => {
        state.value = payload;
    },
    [drawHistoryDisplay]: (state, { payload }) => {
        const { formula, value, formulas } = payload;
        state.historyValue = formula;
        state.value = value;
        state.formulas = formulas ?? state.formulas;
    },
});
