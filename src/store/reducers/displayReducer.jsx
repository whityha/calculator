import {
    CHANGE_SIGN,
    CLEAR_ALL,
    CLEAR_CURRENT,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
    START_EXPRESSION,
} from '@actions/type';
import calc from '@command/command';

import initialState from '../initialState';

const displayReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case START_EXPRESSION:
            return {
                ...state,
                value: action.payload,
                isExpression: true,
                valueHistory: '',
            };
        case DRAW_DISPLAY:
            return {
                ...state,
                value: action.payload.value,
                historyValue:
                    action.payload.resultHistoryValue || state.historyValue,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                value: 0,
            };
        case CLEAR_DISPLAY:
            calc.clear();
            return {
                ...state,
                value: 0,
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
        case CHANGE_SIGN:
            return {
                ...state,
                value: action.payload,
            };
        case DRAW_HISTORY_DISPLAY:
            return {
                ...state,
                historyValue: action.payload.formula,
                value: action.payload.value,
                formulas: action.payload.formulas ?? state.formulas,
                isExpression: action.payload.isExpression,
            };
        default:
            return state;
    }
};
export default displayReducer;
