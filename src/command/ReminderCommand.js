export default class ReminderCommand {
    constructor(valueToReminder) {
        this.currentValue = null;
        this.value = valueToReminder;
        this.sign = '%';
        this.priority = 2;
        this.name = 'remainder';
    }

    execute(items) {
        if (this.currentValue) return this;
        const [num1, num2] = items;
        const res = num1 % num2;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getSign() {
        return this.sign;
    }

    getName() {
        return this.name;
    }
}
