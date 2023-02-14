import {
    MAKE_ACTUAL,
    SWITCH_THEME,
    TOGGLE_HISTORY_MODULE,
} from '@actions/type';

import initialState from '../initialState';

const controlReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case MAKE_ACTUAL:
            return {
                ...state,
                exception: state.actualDig,
                actualDig: action.payload,
            };
        case SWITCH_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case TOGGLE_HISTORY_MODULE: {
            return {
                ...state,
                historyIsShow: !state.historyIsShow,
            };
        }
        default:
            return state;
    }
};

export default controlReducer;
