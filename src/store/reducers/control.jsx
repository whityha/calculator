import { SWITCH_THEME } from '@actions/type';

import initialState from '../initialState';

const controlReducer = (state = initialState, { type } = {}) => {
    switch (type) {
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
