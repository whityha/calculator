import {
    DRAW_DISPLAY,
    DRAW_HISTORY_DISPLAY,
    CHANGE_SIGN,
    CLEAR_CURRENT,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    CLEAR_ALL,
} from '@actions/type';
import calc from '@command/command';
import initialState from '../initialState';

const displayReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
            };
        default:
            return state;
    }
};
export default displayReducer;

// export default createReducer(initialState, {
//     [drawDisplay]: (state, { payload }) => {
//         const { value, resultHistoryValue = state.historyValue } = payload;
//         state.value = value;
//         state.historyValue = resultHistoryValue;
//     },
//     [clear]: (state) => {
//         state.value = 0;
//     },
//     [clearDisplay]: (state) => {
//         state.value = 0;
//         state.historyValue = '';
//         calc.clear();
//     },
//     [clearAll]: (state) => {
//         state.value = 0;
//         state.historyValue = '';
//         calc.clear();
//         state.formulas = [];
//     },
//     [clearHistory]: (state) => {
//         state.formulas = [];
//     },
//     [changeSign]: (state, { payload }) => {
//         state.value = payload;
//     },
//     [drawHistoryDisplay]: (state, { payload }) => {
//         const { formula, value, formulas } = payload;
//         state.historyValue = formula;
//         state.value = value;
//         state.formulas = formulas ?? state.formulas;
//     },
// });
