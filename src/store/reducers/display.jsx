import {
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    DRAW_DISPLAY,
    DRAW_HISTORY,
    DRAW_HISTORY_DISPLAY,
} from '@actions/type';

const initialState = {
    value: 0,
    historyValue: '',
    historyList: [],
};

const displayReducer = (state = initialState, { type, payload }) => {
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
        case CLEAR_HISTORY:
            return {
                ...state,
                historyList: [],
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
