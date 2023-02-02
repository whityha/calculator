import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { setActualDig, setException } from '../actions/controlsActions';

export default createReducer(initialState, {
    [setActualDig]: (state, action) => {
        state.actualDig = action.payload;
    },
    [setException]: (state, action) => {
        state.exception = action.payload;
    },
});
