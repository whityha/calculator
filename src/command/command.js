import changeSignCurrent from '../helpers/changeSignCurrent';
import resultExpression from '../helpers/resultExpression';
import updateHistoryAndExpression from '../helpers/updateHistoryAndExpression';

class CalculatorCommand {
    constructor() {
        this.currentValue = '';
        this.result = 0;

        this.expressionHasBeenCounted = false;
        this.expressionCanBeCounted = false;
        this.commandIsLastItemInExpression = false;

        this.history = [];
        this.expression = [];

        this.openBracketCount = 0;
    }

    appendCommand(command) {
        if (this.commandIsLastItemInExpression) return false;
        this.checkLastHistoryItem();

        if (this.expression.length === 0) {
            updateHistoryAndExpression(
                Number(this.currentValue),
                this.expression,
                this.history
            );
        }
        this.commandIsLastItemInExpression = true;
        this.expressionHasBeenCounted = false;
        this.expressionCanBeCounted = true;
        this.addItemInExpression(command);
        this.addItemInHistory(command.getSign());
        this.clearCurrentValue();
        return true;
    }

    getResult() {
        this.result = resultExpression(this.expression);
        this.currentValue = this.result.toString();
        return this.result;
    }

    equal(showDisplayHistoryBeforeClean = false) {
        if (this.expressionHasBeenCounted) return this.currentValue;
        if (this.commandIsLastItemInExpression) return this.getHistoryDisplay();
        if (!this.expressionCanBeCounted)
            return this.getHistoryDisplay() || '0';

        while (this.openBracketCount) {
            this.addItemInExpression(')');
            this.addItemInHistory(')');
            this.openBracketCount -= 1;
        }

        this.history.push('=');
        this.getResult();
        this.expressionHasBeenCounted = true;
        if (showDisplayHistoryBeforeClean)
            showDisplayHistoryBeforeClean(this.currentValue);

        this.clearCalculator();

        return this.currentValue;
    }

    changeCurrentValue(value) {
        this.currentValue = updateHistoryAndExpression(
            value,
            this.expression,
            this.history
        );
        this.commandIsLastItemInExpression = false;
    }

    changeSign() {
        if (this.commandIsLastItemInExpression) return false;
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
        this.result = 0;
        this.commandIsLastItemInExpression = false;
        this.isEqual = false;
        this.expressionCanBeCounted = false;
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

const calc = new CalculatorCommand(0);

export default calc;
