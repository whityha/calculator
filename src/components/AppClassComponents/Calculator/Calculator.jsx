import React from 'react';
import { connect } from 'react-redux';
import {
    drawDisplay,
    drawHistoryDisplay,
    changeSign,
    clear,
    clearDisplay,
    startExpression,
} from '@actions/displayActions';
import calc from '@command/command';
import AddCommand from '@command/AddCommand';
import DivideCommand from '@command/DivideCommand';
import ReminderCommand from '@command/ReminderCommand';
import MultiplyCommand from '@command/MultiplyCommand';
import SubtractCommand from '@command/SubtractCommand';
import {
    DRAW_HISTORY,
    DRAW,
    CHANGE_SIGN,
    CLEAR,
    CLEAR_DISPLAY,
    MAX_DISPLAY_LENGTH,
    START_EXPRESSION_BUTTON,
    DRAW_EXPRESSION,
} from '@constants/options';
import initialState from '@store/initialState';
import Expression from '@command/Expression';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends React.PureComponent {
    render() {
        const { value, formulas, isExpression } = this.props;
        const { doAction } = this.props;
        const handleDisplay = (dig, name) => {
            if (START_EXPRESSION_BUTTON.includes(name))
                return () => {
                    calc.isEqual = false;
                    calc.expression = new Expression();
                    calc.expression.start(calc.current);
                    doAction(
                        startExpression(
                            calc.expression.getFormulaDisplay() +
                                calc.expression.current
                        )
                    );
                };
            if (DRAW.includes(name))
                return () => {
                    let resultValue = value;
                    // Сброс памяти, если последним нажималось равно '='
                    if (calc.isEqual) {
                        const { historyValue } = initialState;
                        doAction(
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
                            else if (value === '-') resultValue += dig;
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
                                    value && value !== '0' && value !== '-0'
                                        ? (resultValue += dig)
                                        : dig;
                    }
                    calc.current = resultValue;
                    calc.isRegistered = false;
                    doAction(
                        drawDisplay({
                            value: resultValue,
                        })
                    );
                };
            if (CLEAR.includes(name))
                return () => {
                    doAction(clear());
                };
            if (CLEAR_DISPLAY.includes(name))
                return () => doAction(clearDisplay());
            if (CHANGE_SIGN.includes(name))
                return () => {
                    let result = 0;
                    const currentCondition =
                        calc.current === 0 || calc.current === '-';
                    const positive = (str) => str[0] !== '-';
                    if (currentCondition) result = calc.current === 0 ? '-' : 0;
                    else {
                        result = positive(value) ? `-${value}` : value.slice(1);
                    }
                    calc.current = result;
                    doAction(changeSign(result));
                };
            if (DRAW_HISTORY.includes(name))
                return () => {
                    const changeHistory = (Command) => {
                        const resultValue = calc.getResult() ?? value;
                        calc.registerCommand(new Command(resultValue));
                        const resultFormula = calc.formula ? calc.formula : '';
                        doAction(
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
                                    formula: calc.formula + calc.value,
                                    id: Math.random(),
                                });
                                const resultFormula = calc.formula
                                    ? calc.formula
                                    : '';
                                doAction(
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
        const handleExpression = (dig, name) => {
            if (DRAW_EXPRESSION.includes(name)) {
                return () => {
                    const { expression } = calc;
                    let oldFormula = '';
                    const resultFormulas = [...formulas];
                    const handleOperand = (operatorName, operatorSymbol) => {
                        if (expression.isRegistered) return;
                        expression.registerOperator(
                            operatorName,
                            operatorSymbol
                        );
                        expression.isClosed = false;
                    };
                    switch (name) {
                        case 'multiply':
                            handleOperand(name, dig);
                            break;
                        case 'divide':
                            handleOperand(name, dig);
                            break;
                        case 'plus':
                            handleOperand(name, dig);
                            break;
                        case 'minus':
                            handleOperand(name, dig);
                            break;
                        case 'remainder':
                            handleOperand(name, dig);
                            break;
                        case 'bl':
                            if (!expression.isRegistered) return;
                            expression.registerOperator(name, dig);
                            expression.isClosed = false;
                            break;
                        case 'br':
                            if (expression.isRegistered) return;
                            expression.registerOperator(name, dig);
                            expression.isRegistered = false;
                            expression.isClosed = true;
                            break;
                        case 'equal':
                            if (expression.isRegistered) return;
                            if (calc.isEqual) return;
                            expression.addCurrentInArray();
                            expression.equal();
                            calc.current = expression.isSuccess
                                ? expression.result
                                : calc.current;
                            oldFormula = calc.formula;
                            calc.current = calc.equal();
                            calc.isEqual = true;
                            calc.isRegistered = false;
                            calc.formula = `${oldFormula} ${expression.getFormulaDisplay()} = `;
                            resultFormulas.push({
                                formula: calc.formula + calc.value,
                                id: Math.random(),
                            });
                            doAction(
                                drawHistoryDisplay({
                                    formulas: resultFormulas,
                                    formula: calc.formula,
                                    value: calc.value.toString(),
                                    isExpression: false,
                                })
                            );
                            break;
                        case 'plusmn':
                            expression.changeSign();
                            break;
                        case 'zero':
                            expression.changeCurrent(dig);
                            break;
                        case 'dot':
                            expression.changeCurrent(dig);
                            break;
                        default:
                            if (expression.isClosed) return;
                            expression.changeCurrent(dig);
                    }
                    if (!expression.isSuccess) {
                        doAction(
                            drawDisplay({
                                value:
                                    expression.getFormulaDisplay() +
                                    expression.current,
                            })
                        );
                    }
                };
            }
            return () => {};
        };
        return (
            <>
                <Display />
                <Keypad
                    handle={isExpression ? handleExpression : handleDisplay}
                    calc={calc}
                />
            </>
        );
    }
}

const mapStateToProps = ({ display }) => display;
const mapDispatchToProps = (dispatch) => {
    return {
        doAction: (action) => {
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
