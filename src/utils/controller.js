import {
    clearDisplay,
    drawDisplay,
    drawHistoryDisplay,
} from '@actions/display';
import calc from '@command/command';
import MultiplyCommand from '@command/MultiplyCommand';
import { CHANGE_SIGN, CLEAR, DIGITS, OPERATORS } from '@constants/options';

import handleOperators from './handleOperators';

const controller = (value, name, dispatch) => () => {
    if (name === 'bracketLeft') {
        if (!calc.commandIsLastItemInExpression && calc.currentValue) {
            calc.appendCommand(new MultiplyCommand());
        }
        calc.openBracket();
        calc.commandIsLastItemInExpression = true;
        dispatch(drawDisplay(calc.getHistoryDisplay()));
        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
    }
    if (name === 'bracketRight') {
        if (calc.openBracketCount && !calc.commandIsLastItemInExpression) {
            calc.closeBracket();
            dispatch(drawDisplay(calc.getHistoryDisplay()));
            dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        }
    }
    if (DIGITS.includes(name)) {
        if (calc.getLastHistoryItem() !== ')') calc.changeCurrentValue(value);
        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        dispatch(drawDisplay(calc.getHistoryDisplay()));
    }
    if (CHANGE_SIGN.includes(name)) {
        if (!calc.changeSign()) return;
        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        dispatch(drawDisplay(calc.getHistoryDisplay()));
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
