import { changeSignCurrent, result, updateHistoryAndFormula } from './helpers';

class CalculatorCommand {
    constructor() {
        this.current = '';
        this.result = 0;

        this.wasEqual = false;
        this.canEqual = false;
        this.isRegistered = false;
        this.isExpression = false;

        this.history = [];
        this.formula = [];

        this.openBracketCount = 0;
    }

    registerCommand(command) {
        if (this.isRegistered) return false;
        this.checkLastHistoryItem();

        if (this.formula.length === 0) {
            updateHistoryAndFormula(
                Number(this.current),
                this.formula,
                this.history
            );
        }
        this.isRegistered = true;
        this.wasEqual = false;
        this.canEqual = true;
        this.addItemInFormula(command);
        this.addItemInHistory(command.getSign());
        this.clearCurrent();
        return true;
    }

    getResult() {
        this.result = result(this.formula);
        this.current = this.result.toString();
        return this.result;
    }

    equal(callback = false) {
        if (this.wasEqual) return this.current;
        if (this.isRegistered) return this.getHistoryDisplay();
        if (!this.canEqual) return this.getHistoryDisplay() || '0';

        while (this.openBracketCount) {
            this.addItemInFormula(')');
            this.addItemInHistory(')');
            this.openBracketCount -= 1;
        }

        this.history.push('=');
        this.getResult();
        this.wasEqual = true;
        if (callback) callback(this.current);

        this.clear();

        return this.current;
    }

    changeCurrentValue(digit) {
        this.current = updateHistoryAndFormula(
            digit,
            this.formula,
            this.history
        );
        this.isRegistered = false;
    }

    changeSign() {
        if (this.isRegistered) return false;
        this.current =
            changeSignCurrent(
                this.getLastHistoryItem() || this.current,
                this.history,
                this.formula
            ) || '';
        return this.current;
    }

    getLastHistoryItem() {
        return this.history[this.history.length - 1];
    }

    addItemInFormula(item) {
        this.formula.push(item);
    }

    addItemInHistory(item) {
        this.history.push(item.toString());
    }

    getHistoryDisplay() {
        return this.history.join(' ');
    }

    openBracket() {
        this.addItemInFormula('(');
        this.addItemInHistory('(');
        this.openBracketCount += 1;
    }

    closeBracket() {
        this.addItemInHistory(')');
        this.addItemInFormula(')');
        this.openBracketCount -= 1;
    }

    checkLastHistoryItem() {
        if (this.getLastHistoryItem() === '.') {
            this.history[this.history.length - 1] = '0';
        } else if (this.getLastHistoryItem() === '-.') {
            this.history[this.history.length - 1] = '-0';
        }
    }

    clear() {
        this.clearHistory();
        this.clearFormula();
        this.result = 0;
        this.isRegistered = false;
        this.isEqual = false;
        this.canEqual = false;
    }

    clearCurrent() {
        this.current = '';
    }

    clearFormula() {
        this.formula = [];
    }

    clearHistory() {
        this.history = [];
    }
}

const calc = new CalculatorCommand(0);

export default calc;
