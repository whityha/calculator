import {
    changeLastItemExpression,
    changeSign,
    resultExpression,
} from '../helpers';

class Calculator {
    constructor() {
        this.displayValue = '0';

        this.expression = [];

        this.openBracketCount = 0;
    }

    appendCommand(command) {
        if (!this.expression.length)
            this.addItemInExpression(this.displayValue);
        else if (typeof this.getLastExpressionItem() === 'object') {
            this.deleteLastExpressionItem();
        }
        this.addItemInExpression(command);
        this.clearDisplayValue();

        return true;
    }

    getResult() {
        return resultExpression(this.expression).toString();
    }

    equal() {
        this.closeAllBrackets();
        this.displayValue = this.getResult();
        const r = {
            expression: `${this.getExpressionDisplay()} = `,
            result: this.displayValue,
        };

        this.clearExpression();
        return r;
    }

    changeDisplayValue(value) {
        this.displayValue = changeLastItemExpression(value, this.expression);
    }

    changeSignDisplayValue() {
        this.displayValue = changeSign(this.displayValue, this.expression);
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
        this.clearDisplayValue();
    }

    clearDisplayValue() {
        this.displayValue = '0';
    }

    clearExpression() {
        this.expression = [];
    }
}

const calc = new Calculator(0);

export default calc;
