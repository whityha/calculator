/* eslint-disable max-classes-per-file */
const fixNumber = (result) => result.toFixed(3);

class CalculatorCommand {
    constructor(props) {
        this.value = props.value || 0;
        this.current = 0;

        this.isEqual = false;
        this.isRegistered = false;

        this.history = [];
        this.formula = '';
    }

    registerCommand(command) {
        if (this.isEqual) {
            this.clearFormula();
            this.switchIsEqual();
            this.clearHistory();
        }
        if (!this.isRegistered) {
            this.addCommandToHistory(command);
            this.initializeValue(command);
            this.addCommandToFormula(command);
            this.clearCurrent();
            this.isRegistered = !this.isRegistered;
        }
    }

    executeCommand() {
        this.value = this.getLastCommand()
            ? this.getLastCommand().execute(this.current)
            : 0;
        return this.value.toString();
    }

    getLastCommand() {
        return this.history[this.history.length - 1];
    }

    getResult() {
        if (this.getLastCommand() && this.current) {
            const result = this.executeCommand();
            return result;
        }
        return undefined;
    }

    equal() {
        if (this.getLastCommand() && this.current) {
            this.formula += `${this.current} = `;
            this.switchIsEqual();
            const result = this.executeCommand();
            this.clearHistory();
            this.current = result;
            return result;
        }
        return this.current.toString();
    }

    clear() {
        this.value = 0;
        this.history = [];
        this.formula = '';
        this.current = 0;
        this.isEqual = false;
    }

    clearFormula() {
        this.formula = '';
    }

    switchIsEqual() {
        this.isEqual = !this.isEqual;
    }

    addCommandToHistory(command) {
        this.history.push(command);
    }

    addCommandToFormula(command) {
        this.formula = this.formula
            ? `${this.formula}${this.current}${command.dig}`
            : `${this.current}${command.dig}`;
    }

    initializeValue(command) {
        this.value = this.history.length >= 1 ? command.value : this.current;
    }

    clearCurrent() {
        this.current = 0;
    }

    clearHistory() {
        this.history = [];
    }
}

export class AddCommand {
    constructor(valueToAdd) {
        this.value = Number(valueToAdd);
        this.currentValue = null;
        this.dig = ' + ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = Number(this.currentValue) + this.value;
        const fixed = res !== Infinity ? fixNumber(res) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.currentValue} + ${this.value}`;
    }
}

export class ReminderCommand {
    constructor(valueToReminder) {
        this.currentValue = null;
        this.value = valueToReminder;
        this.dig = ' % ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value % currentValue;
        const fixed = res !== Infinity ? fixNumber(res) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} ÷ ${this.currentValue}`;
    }
}

export class SubtractCommand {
    constructor(valueToSubtract) {
        this.value = valueToSubtract;
        this.currentValue = null;
        this.dig = ' - ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value - currentValue;
        const fixed = res !== Infinity ? fixNumber(res) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} - ${this.currentValue}`;
    }
}

export class MultiplyCommand {
    constructor(valueToMultiply) {
        this.value = valueToMultiply;
        this.currentValue = null;
        this.dig = ' × ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value * currentValue;
        const fixed = res !== Infinity ? fixNumber(res) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} × ${this.currentValue}`;
    }
}

export class DivideCommand {
    constructor(valueToDivide) {
        this.currentValue = null;
        this.value = valueToDivide;
        this.dig = ' ÷ ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value / currentValue;
        const fixed = res !== Infinity ? fixNumber(res) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} ÷ ${this.currentValue}`;
    }
}

export const calc = new CalculatorCommand(0);
