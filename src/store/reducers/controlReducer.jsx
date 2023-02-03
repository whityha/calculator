import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { setActualDig } from '../actions/controlsActions';

export default createReducer(initialState, {
    [setActualDig]: (state, action) => {
        state.exception = state.actualDig;
        state.actualDig = action.payload;
    },
});
