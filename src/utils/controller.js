import { clearDisplay, setDisplayValue } from '@actions/display';
import { MultiplyCommandOptions } from '@command/config';
import {
    CHANGE_SIGN,
    CLEAR_BUTTON,
    DIGITS,
    LEFT_BRACKET,
    OPERATORS,
    RIGHT_BRACKET,
} from '@constants';

import calculator from './Calculator';
import handleOperators from './handleOperators';
import validate from './validate';

const controller = (value, name, dispatch) => {
    const updateDisplayValue = () =>
        dispatch(setDisplayValue(calculator.getExpressionDisplay()));
    return () => {
        if (!validate(name, calculator)) return false;
        if (LEFT_BRACKET.includes(name)) {
            if (calculator.currentValue && calculator.currentValue !== '0') {
                calculator.appendCommandOptions(MultiplyCommandOptions);
            }
            calculator.openBracket();
            updateDisplayValue();
        }
        if (RIGHT_BRACKET.includes(name)) {
            if (calculator.getLastExpressionItem() === '(')
                calculator.deleteLastBracket();
            else calculator.closeBracket();
            updateDisplayValue();
        }
        if (DIGITS.includes(name)) {
            calculator.changeCurrentValue(value);
            updateDisplayValue();
        }
        if (CHANGE_SIGN.includes(name)) {
            calculator.changeSignCurrentValue();
            updateDisplayValue();
        }
        if (OPERATORS.includes(name)) {
            handleOperators(calculator, name, dispatch);
        }
        if (CLEAR_BUTTON.includes(name)) {
            calculator.clearCalculator();
            dispatch(clearDisplay());
        }
        return false;
    };
};

export default controller;
