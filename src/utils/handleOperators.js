import { drawDisplay, drawHistory, drawHistoryDisplay } from '@actions/display';
import AddCommand from '@command/AddCommand';
import calc from '@command/command';
import DivideCommand from '@command/DivideCommand';
import MultiplyCommand from '@command/MultiplyCommand';
import RemainderCommand from '@command/ReminderCommand';
import SubtractCommand from '@command/SubtractCommand';

const handleOperators = (name, dispatch) => {
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
};

export default handleOperators;
