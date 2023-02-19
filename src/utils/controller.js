import { clearDisplay, setDisplayValue } from '@actions/display';
import MultiplyCommand from '@command/MultiplyCommand';
import { CHANGE_SIGN, CLEAR_BUTTON, DIGITS, OPERATORS } from '@constants';

import calc from './Calculator';
import handleOperators from './handleOperators';
import validate from './validate';

const controller = (value, name, dispatch) => () => {
    if (!validate(name, calc)) return false;
    if (name === 'bracketLeft') {
        if (calc.currentValue) {
            calc.appendCommand(new MultiplyCommand());
        }
        calc.openBracket();
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (name === 'bracketRight') {
        calc.closeBracket();
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (DIGITS.includes(name)) {
        calc.changeCurrentValue(value);
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (CHANGE_SIGN.includes(name)) {
        calc.changeSign();
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (OPERATORS.includes(name)) {
        handleOperators(name, dispatch);
    }
    if (CLEAR_BUTTON.includes(name)) {
        calc.clearCalculator();
        dispatch(clearDisplay());
    }
    return false;
};

export default controller;
