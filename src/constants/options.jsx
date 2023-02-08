const MAX_DISPLAY_LENGTH = 9;
const PRIORITY = {
    divide: 2,
    plus: 1,
    minus: 1,
    multiply: 2,
    remainder: 2,
};
const DRAW = [
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
    'bl',
    'br',
    'equal',
    'plusmn',
];
const DRAW_HISTORY = [
    'divide',
    'plus',
    'minus',
    'multiply',
    'equal',
    'remainder',
    'bl',
    'br',
];
const CLEAR = ['C'];
const CLEAR_DISPLAY = ['CE'];
const CHANGE_SIGN = ['plusmn'];
const START_EXPRESSION_BUTTON = ['bl'];

export {
    DRAW,
    DRAW_HISTORY,
    CLEAR,
    CLEAR_DISPLAY,
    MAX_DISPLAY_LENGTH,
    CHANGE_SIGN,
    START_EXPRESSION_BUTTON,
    DRAW_EXPRESSION,
    PRIORITY,
};
