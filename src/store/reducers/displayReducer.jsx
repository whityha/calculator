import {
    CLEAR_ALL,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
} from '@actions/type';
import calc from '@command/command';

import initialState from '../initialState';

const displayReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case DRAW_DISPLAY:
            return {
                ...state,
                value: action.payload,
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
        case DRAW_HISTORY_DISPLAY:
            return {
                ...state,
                historyValue: action.payload,
            };
        default:
            return state;
    }
};
export default displayReducer;
