import {
    clearDisplay,
    setDisplayValue,
    setHistoryDisplayValue,
} from '@actions/display';
import calc from '@command/command';
import MultiplyCommand from '@command/MultiplyCommand';
import { CHANGE_SIGN, CLEAR, DIGITS, OPERATORS } from '@constants';

import handleOperators from './handleOperators';

const controller = (value, name, dispatch) => () => {
    if (name === 'bracketLeft') {
        if (!calc.commandIsLastItemInExpression && calc.currentValue) {
            calc.appendCommand(new MultiplyCommand());
        }
        calc.openBracket();
        calc.commandIsLastItemInExpression = true;
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
        dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
    }
    if (name === 'bracketRight') {
        if (calc.openBracketCount && !calc.commandIsLastItemInExpression) {
            calc.closeBracket();
            dispatch(setDisplayValue(calc.getHistoryDisplay()));
            dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
        }
    }
    if (DIGITS.includes(name)) {
        if (calc.getLastHistoryItem() !== ')') calc.changeCurrentValue(value);
        dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (CHANGE_SIGN.includes(name)) {
        if (!calc.changeSign()) return;
        dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
        dispatch(setDisplayValue(calc.getHistoryDisplay()));
    }
    if (OPERATORS.includes(name)) {
        handleOperators(name, dispatch);
    }
    if (CLEAR.includes(name)) {
        calc.clearCalculator();
        calc.clearCurrentValue();
        dispatch(clearDisplay());
    }
};

export default controller;
