import {
    changeLastItemExpression,
    changeSignCurrent,
    resultExpression,
} from '../helpers';

class Calculator {
    constructor() {
        this.currentValue = '0';

        this.expression = [];

        this.openBracketCount = 0;
    }

    appendCommand(command) {
        if (!this.expression.length)
            this.addItemInExpression(this.currentValue);
        else if (typeof this.getLastExpressionItem() === 'object') {
            this.deleteLastExpressionItem();
        }
        this.addItemInExpression(command);
        this.clearCurrentValue();

        return true;
    }

    getResult() {
        return resultExpression(this.expression).toString();
    }

    equal() {
        this.closeAllBrackets();
        this.currentValue = this.getResult();
        const r = {
            expression: `${this.getExpressionDisplay()} = `,
            result: this.currentValue,
        };

        this.clearExpression();
        return r;
    }

    changeCurrentValue(value) {
        this.currentValue = changeLastItemExpression(value, this.expression);
    }

    changeSign() {
        this.currentValue = changeSignCurrent(
            this.currentValue,
            this.expression
        );

        return this.currentValue;
    }

    deleteLastExpressionItem() {
        this.expression.pop();
    }

    addItemInExpression(item) {
        this.expression.push(item);
    }

    getExpressionDisplay() {
        return this.expression
            .map((item) => (typeof item === 'object' ? item.getSign() : item))
            .join(' ');
    }

    getLastExpressionItem() {
        return this.expression[this.expression.length - 1];
    }

    openBracket() {
        this.addItemInExpression('(');
        this.openBracketCount += 1;
    }

    closeBracket() {
        this.addItemInExpression(')');
        this.openBracketCount -= 1;
    }

    deleteLastBracket() {
        this.deleteLastExpressionItem();
        this.openBracketCount -= 1;
    }

    closeAllBrackets() {
        while (this.openBracketCount) {
            this.addItemInExpression(')');
            this.openBracketCount -= 1;
        }
    }

    clearCalculator() {
        this.clearExpression();
        this.clearCurrentValue();
    }

    clearCurrentValue() {
        this.currentValue = '0';
    }

    clearExpression() {
        this.expression = [];
    }
}

const calc = new Calculator(0);

export default calc;
