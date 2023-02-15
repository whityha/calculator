const MAX_DISPLAY_LENGTH = 9;

const DRAW_BUTTONS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'dot',
];
const DRAW_EXPRESSION = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'dot',
    'divide',
    'plus',
    'minus',
    'multiply',
    'remainder',
    'bracketLeft',
    'bracketRight',
    'equal',
    'plusmn',
];
const DRAW_HISTORY_BUTTONS = [
    'divide',
    'plus',
    'minus',
    'multiply',
    'equal',
    'remainder',
    'bracketLeft',
    'bracketRight',
];
const CLEAR = ['C'];
const CLEAR_DISPLAY = ['CE'];
const CHANGE_SIGN = ['plusmn'];
const START_EXPRESSION_BUTTON = ['bracketLeft'];

export {
    CHANGE_SIGN,
    CLEAR,
    CLEAR_DISPLAY,
    DRAW_BUTTONS,
    DRAW_EXPRESSION,
    DRAW_HISTORY_BUTTONS,
    MAX_DISPLAY_LENGTH,
    START_EXPRESSION_BUTTON,
};
