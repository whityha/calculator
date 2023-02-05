import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { setActualDig, switchTheme } from '../actions/controlsActions';

export default createReducer(initialState, {
    [setActualDig]: (state, { payload }) => {
        state.exception = state.actualDig;
        state.actualDig = payload;
    },
    [switchTheme]: (state) => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
});
