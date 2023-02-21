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

const addOperationInExpression = (calculator, commandOptions, dispatch) => {
    calculator.appendCommandOptions(commandOptions);
    dispatch(setDisplayValue(calculator.getExpressionDisplay()));
    dispatch(setHistoryDisplayValue(''));
};

const handleOperators = (calculator, name, dispatch) => {
    switch (name) {
        case 'plus':
            addOperationInExpression(calculator, AddCommandOptions, dispatch);
            break;
        case 'minus':
            addOperationInExpression(
                calculator,
                SubtractCommandOptions,
                dispatch
            );
            break;
        case 'multiply':
            addOperationInExpression(
                calculator,
                MultiplyCommandOptions,
                dispatch
            );
            break;
        case 'divide':
            addOperationInExpression(
                calculator,
                DivideCommandOptions,
                dispatch
            );
            break;
        case 'remainder':
            addOperationInExpression(
                calculator,
                RemainderCommandOptions,
                dispatch
            );
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
