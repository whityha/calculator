import {
    addItemInHistoryList,
    setDisplayValue,
    setHistoryDisplayValue,
} from '@actions/display';
import {
    AddCommandOptions,
    DivideCommandOptions,
    MultiplyCommandOptions,
    RemainderCommandOptions,
    SubtractCommandOptions,
} from '@command/config';

const doOperation = (calculator, commandOptions, dispatch) => {
    calculator.appendCommandOptions(commandOptions);
    dispatch(setDisplayValue(calculator.getExpressionDisplay()));
};

const handleOperators = (calculator, name, dispatch) => {
    switch (name) {
        case 'plus':
            doOperation(calculator, AddCommandOptions, dispatch);
            break;
        case 'minus':
            doOperation(calculator, SubtractCommandOptions, dispatch);
            break;
        case 'multiply':
            doOperation(calculator, MultiplyCommandOptions, dispatch);
            break;
        case 'divide':
            doOperation(calculator, DivideCommandOptions, dispatch);
            break;
        case 'remainder':
            doOperation(calculator, RemainderCommandOptions, dispatch);
            break;
        case 'equal': {
            const { expression, result } = calculator.equal();
            dispatch(setHistoryDisplayValue(expression));
            dispatch(
                addItemInHistoryList({
                    expression: `${expression} ${result}`,
                    id: Math.random(),
                })
            );
            dispatch(setDisplayValue(result));
            break;
        }
        default:
            break;
    }
};

export default handleOperators;
