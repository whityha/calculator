import { SWITCH_THEME, TOGGLE_HISTORY_MODULE } from '@actions/type';

const initialState = {
    theme: 'light',
    isShowHistory: true,
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case TOGGLE_HISTORY_MODULE: {
            return {
                ...state,
                isShowHistory: !state.isShowHistory,
            };
        }
        default:
            return state;
    }
};

export default settingsReducer;
