import {
    CLEAR_ALL,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY,
    DRAW_HISTORY_DISPLAY,
} from '@actions/type';
import calc from '@command/command';

import initialState from '../initialState';

const displayReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case DRAW_DISPLAY:
            return {
                ...state,
                value: payload,
            };
        case CLEAR_DISPLAY:
            return {
                ...state,
                value: '0',
                historyValue: '',
            };
        case CLEAR_ALL:
            calc.clear();
            return {
                ...state,
                value: 0,
                historyValue: '',
                formulas: [],
            };
        case CLEAR_HISTORY:
            return {
                ...state,
                formulas: [],
            };
        case DRAW_HISTORY:
            return {
                ...state,
                historyList: [...state.historyList, payload],
            };
        case DRAW_HISTORY_DISPLAY:
            return {
                ...state,
                historyValue: payload,
            };
        default:
            return state;
    }
};
export default displayReducer;
