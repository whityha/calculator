import { MAKE_ACTUAL, SWITCH_THEME } from '@actions/type';

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
                theme: state.theme === 'dark' ? 'light' : 'dark',
            };
        default:
            return state;
    }
};

export default controlReducer;
