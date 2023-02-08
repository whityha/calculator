class CalculatorCommand {
    constructor(props) {
        this.value = props || 0;
        this.current = 0;

        this.isEqual = false;
        this.isRegistered = false;
        this.isExpression = false;

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
            this.isEqual = true;
            const result = this.executeCommand();
            this.clearHistory();
            this.current = result;
            return result;
        }
        if (!this.getLastCommand() && this.current) {
            this.value = this.current;
        }
        return this.current.toString();
    }

    startExpression() {
        this.clearCurrent();
        this.isExpression = true;
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

const calc = new CalculatorCommand(0);

export default calc;
