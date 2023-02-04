import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    drawDisplay,
    drawHistoryDisplay,
    changeSign,
    clear,
    clearDisplay,
} from '@actions/displayActions';
import {
    AddCommand,
    MultiplyCommand,
    DivideCommand,
    SubtractCommand,
    ReminderCommand,
    calc,
} from '@command/command';
import {
    DRAW_HISTORY,
    DRAW,
    CHANGE_SIGN,
    CLEAR,
    CLEAR_DISPLAY,
    MAX_DISPLAY_LENGTH,
} from '@constants/options';
import initialState from '../../../store/initialState';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import ControlPanel from '../ControlPanel/ControlPanel';
import History from '../History/History';

const Calculator = () => {
    const dispatch = useDispatch();
    const displayState = useSelector(({ display }) => display);
    const { value, formulas } = displayState;
    const handleDisplay = (dig, name) => {
        if (DRAW.includes(name))
            return () => {
                let resultValue = value;
                // Сброс памяти, если последним нажималось равно '='
                if (calc.isEqual) {
                    const { historyValue } = initialState;
                    dispatch(
                        drawDisplay({
                            resultHistoryValue: historyValue,
                        })
                    );
                    calc.formula = false;
                    calc.isEqual = !calc.isEqual;
                    resultValue = 0;
                    calc.current = 0;
                }

                const dotCondition = value ? value.indexOf('.') !== -1 : 0;
                const lengthValue = value ? value.length : 0;
                const lengthCondition = lengthValue < MAX_DISPLAY_LENGTH;
                const currentCondition = calc.current === 0;

                switch (name) {
                    case 'zero':
                        if (currentCondition) resultValue = dig;
                        else if (!value) resultValue = dig;
                        else if (
                            lengthCondition &&
                            (dotCondition || Number(value) > 0)
                        )
                            resultValue += dig;
                        break;
                    case 'dot':
                        if (currentCondition) resultValue = dig;
                        else if (dotCondition) break;
                        else if (!value) resultValue = dig;
                        else if (value === '0' && lengthCondition)
                            resultValue += dig;
                        else if (lengthCondition) resultValue += dig;
                        break;
                    default:
                        if (currentCondition) {
                            resultValue = dig;
                        } else if (lengthCondition)
                            resultValue =
                                value && value !== '0'
                                    ? (resultValue += dig)
                                    : dig;
                }
                calc.current = resultValue;
                calc.isRegistered = false;
                dispatch(
                    drawDisplay({
                        value: resultValue,
                    })
                );
            };
        if (CLEAR.includes(name))
            return () => {
                dispatch(clear());
            };
        if (CLEAR_DISPLAY.includes(name)) return () => dispatch(clearDisplay());
        if (CHANGE_SIGN.includes(name))
            return () => {
                let result = 0;
                const currentCondition = calc.current === 0;
                const positive = (str) => str[0] !== '-';
                if (currentCondition) result = calc.isRegistered ? '-' : '-0';
                else {
                    result = positive(value) ? `-${value}` : value.slice(1);
                }
                calc.current = result;
                dispatch(changeSign(result));
            };
        if (DRAW_HISTORY.includes(name))
            return () => {
                const changeHistory = (Command) => {
                    const resultValue = calc.getResult() ?? value;
                    calc.registerCommand(new Command(resultValue));
                    const resultFormula = calc.formula ? calc.formula : '';
                    dispatch(
                        drawHistoryDisplay({
                            formula: resultFormula,
                            value: resultValue,
                        })
                    );
                };
                let resultValue = 0;
                const resultFormulas = [...formulas];
                switch (name) {
                    case 'plus':
                        changeHistory(AddCommand);
                        break;
                    case 'multiply':
                        changeHistory(MultiplyCommand);
                        break;
                    case 'divide':
                        changeHistory(DivideCommand);
                        break;
                    case 'remainder':
                        changeHistory(ReminderCommand);
                        break;
                    case 'minus':
                        changeHistory(SubtractCommand);
                        break;
                    case 'equal':
                        if (!calc.isEqual && calc.current && calc.formula) {
                            resultValue = calc.equal();
                            resultFormulas.push({
                                formula: calc.formula + value,
                                id: Math.random(),
                            });
                            const resultFormula = calc.formula
                                ? calc.formula
                                : '';
                            dispatch(
                                drawHistoryDisplay({
                                    formulas: resultFormulas,
                                    value: resultValue,
                                    formula: resultFormula,
                                })
                            );
                        }
                        break;
                    default:
                }
            };
        return () => {};
    };
    return (
        <>
            <Display />
            <Keypad handle={handleDisplay} calc={calc} />
            <ControlPanel />
            <History />
        </>
    );
};

export default Calculator;
