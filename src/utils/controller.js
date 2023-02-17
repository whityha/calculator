import {
    clearDisplay,
    drawDisplay,
    drawHistory,
    drawHistoryDisplay,
} from '@actions/display';
import AddCommand from '@command/AddCommand';
import calc from '@command/command';
import DivideCommand from '@command/DivideCommand';
import MultiplyCommand from '@command/MultiplyCommand';
import RemainderCommand from '@command/ReminderCommand';
import SubtractCommand from '@command/SubtractCommand';
import {
    CHANGE_SIGN,
    CLEAR,
    DRAW_BUTTONS,
    DRAW_HISTORY_BUTTONS,
} from '@constants/options';

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
    if (DRAW_BUTTONS.includes(name)) {
        if (calc.getLastHistoryItem() !== ')') calc.changeCurrentValue(value);
        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        dispatch(drawDisplay(calc.getHistoryDisplay()));
    }
    if (CHANGE_SIGN.includes(name)) {
        if (!calc.changeSign()) return;
        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        dispatch(drawDisplay(calc.getHistoryDisplay()));
    }
    if (DRAW_HISTORY_BUTTONS.includes(name)) {
        let result;
        switch (name) {
            case 'plus':
                calc.appendCommand(new AddCommand());
                break;
            case 'minus':
                calc.appendCommand(new SubtractCommand());
                break;
            case 'multiply':
                calc.appendCommand(new MultiplyCommand());
                break;
            case 'divide':
                calc.appendCommand(new DivideCommand());
                break;
            case 'remainder':
                calc.appendCommand(new RemainderCommand());
                break;
            case 'equal':
                result = calc.equal((expressionResult) => {
                    dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
                    dispatch(
                        drawHistory({
                            expression: `${calc.getHistoryDisplay()} ${expressionResult}`,
                            id: Math.random(),
                        })
                    );
                });
                dispatch(drawDisplay(result));
                break;
            default:
                break;
        }
        switch (name) {
            case 'plus':
            case 'minus':
            case 'multiply':
            case 'divide':
            case 'remainder':
                dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
                dispatch(drawDisplay(calc.getHistoryDisplay()));
                break;
            default:
                break;
        }
    }
    if (CLEAR.includes(name)) {
        calc.clearCalculator();
        calc.clearCurrentValue();
        dispatch(clearDisplay());
    }
};

export default controller;
