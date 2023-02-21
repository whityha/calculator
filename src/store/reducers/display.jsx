import {
    ADD_ITEM_HISTORY_LIST,
    CLEAR_DISPLAY,
    CLEAR_HISTORY,
    SET_DISPLAY_VALUE,
    SET_HISTORY_DISPLAY_VALUE,
} from '@actions/type';

const initialState = {
    value: '0',
    historyValue: '',
    historyList: [],
};

const displayReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DISPLAY_VALUE:
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
        case ADD_ITEM_HISTORY_LIST:
            return {
                ...state,
                historyList: [...state.historyList, payload],
            };
        case SET_HISTORY_DISPLAY_VALUE:
            return {
                ...state,
                historyValue: payload,
            };
        default:
            return state;
    }
};
export default displayReducer;
