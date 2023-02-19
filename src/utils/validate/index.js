import { CHANGE_SIGN, DIGITS, OPERATORS, RIGHT_BRACKET } from '@constants';

export default (name, calculator) => {
    const { expression, openBracketCount } = calculator;
    const lastExpressionItem = expression[expression.length - 1];
    const isCommandLastItemInExpression =
        typeof lastExpressionItem === 'object';

    if (RIGHT_BRACKET.includes(name)) {
        if (isCommandLastItemInExpression || !openBracketCount) return false;
    }
    if (name === 'equal') {
        if (isCommandLastItemInExpression) return false;
        if (expression.length === 0) return false;
        if (lastExpressionItem === '(') return false;
    }
    if (DIGITS.includes(name)) {
        if (lastExpressionItem === ')') return false;
    }
    if (CHANGE_SIGN.includes(name)) {
        if (isCommandLastItemInExpression) return false;
        if (lastExpressionItem === '(') return false;
        if (lastExpressionItem === ')') return false;
    }
    if (OPERATORS.includes(name)) {
        if (lastExpressionItem === '(') return false;
    }
    return true;
};
