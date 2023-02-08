export default class AddCommand {
    constructor(valueToAdd) {
        this.value = Number(valueToAdd);
        this.currentValue = null;
        this.dig = ' + ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = Number(this.currentValue) + this.value;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.currentValue} + ${this.value}`;
    }
}
