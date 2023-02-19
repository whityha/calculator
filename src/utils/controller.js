import { clearDisplay, setDisplayValue } from '@actions/display';
import MultiplyCommand from '@command/MultiplyCommand';
import {
    CHANGE_SIGN,
    CLEAR_BUTTON,
    DIGITS,
    LEFT_BRACKET,
    OPERATORS,
    RIGHT_BRACKET,
} from '@constants';

import calc from './Calculator';
import handleOperators from './handleOperators';
import validate from './validate';

const controller = (value, name, dispatch) => () => {
    if (!validate(name, calc)) return false;
    if (LEFT_BRACKET.includes(name)) {
        if (calc.currentValue) {
            calc.appendCommand(new MultiplyCommand());
        }
        calc.openBracket();
        dispatch(setDisplayValue(calc.getExpressionDisplay()));
    }
    if (RIGHT_BRACKET.includes(name)) {
        if (calc.getLastExpressionItem() === '(') calc.deleteLastBracket();
        else calc.closeBracket();
        dispatch(setDisplayValue(calc.getExpressionDisplay()));
    }
    if (DIGITS.includes(name)) {
        calc.changeCurrentValue(value);
        dispatch(setDisplayValue(calc.getExpressionDisplay()));
    }
    if (CHANGE_SIGN.includes(name)) {
        calc.changeSign();
        dispatch(setDisplayValue(calc.getExpressionDisplay()));
    }
    if (OPERATORS.includes(name)) {
        handleOperators(calc, name, dispatch);
    }
    if (CLEAR_BUTTON.includes(name)) {
        calc.clearCalculator();
        dispatch(clearDisplay());
    }
    return false;
};

export default controller;
