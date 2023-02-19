import {
    changeSignCurrent,
    resultExpression,
    updateHistoryAndExpression,
} from '../helpers';

class Calculator {
    constructor() {
        this.currentValue = '';

        this.history = [];
        this.expression = [];

        this.openBracketCount = 0;
    }

    appendCommand(command) {
        this.checkLastHistoryItem();

        if (this.expression.length === 0) {
            updateHistoryAndExpression(
                Number(this.currentValue),
                this.expression,
                this.history
            );
        }
        this.addItemInExpression(command);
        this.addItemInHistory(command.getSign());
        this.clearCurrentValue();
        return true;
    }

    getResult() {
        this.currentValue = resultExpression(this.expression).toString();
        return this.currentValue;
    }

    closeAllBrackets() {
        while (this.openBracketCount) {
            this.addItemInExpression(')');
            this.addItemInHistory(')');
            this.openBracketCount -= 1;
        }
    }

    equal(showDisplayHistoryBeforeClean = false) {
        this.closeAllBrackets();

        this.history.push('=');
        this.getResult();
        if (showDisplayHistoryBeforeClean)
            showDisplayHistoryBeforeClean(this.currentValue);

        this.clearExpression();
        this.clearHistory();
    }

    changeCurrentValue(value) {
        this.currentValue = updateHistoryAndExpression(
            value,
            this.expression,
            this.history
        );
    }

    changeSign() {
        this.currentValue =
            changeSignCurrent(
                this.getLastHistoryItem() || this.currentValue,
                this.history,
                this.expression
            ) || '';

        return this.currentValue;
    }

    getLastHistoryItem() {
        return this.history[this.history.length - 1];
    }

    addItemInExpression(item) {
        this.expression.push(item);
    }

    addItemInHistory(item) {
        this.history.push(item.toString());
    }

    getHistoryDisplay() {
        return this.history.join(' ');
    }

    openBracket() {
        this.addItemInExpression('(');
        this.addItemInHistory('(');
        this.openBracketCount += 1;
    }

    closeBracket() {
        this.addItemInHistory(')');
        this.addItemInExpression(')');
        this.openBracketCount -= 1;
    }

    checkLastHistoryItem() {
        if (
            this.getLastHistoryItem() === '.' ||
            this.getLastHistoryItem() === '-.'
        ) {
            this.history[this.history.length - 1] = '0';
        }
    }

    clearCalculator() {
        this.clearHistory();
        this.clearExpression();
        this.clearCurrentValue();
    }

    clearCurrentValue() {
        this.currentValue = '';
    }

    clearExpression() {
        this.expression = [];
    }

    clearHistory() {
        this.history = [];
    }
}

const calc = new Calculator(0);

export default calc;
