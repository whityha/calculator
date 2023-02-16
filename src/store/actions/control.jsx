import { SWITCH_THEME } from './type';

const switchTheme = (payload) => ({
    type: SWITCH_THEME,
    payload,
});

export default switchTheme;
