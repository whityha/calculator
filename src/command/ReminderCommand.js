export default class ReminderCommand {
    constructor(valueToReminder) {
        this.currentValue = null;
        this.value = valueToReminder;
        this.dig = ' % ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value % currentValue;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} ÷ ${this.currentValue}`;
    }
}
