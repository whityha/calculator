export default class MultiplyCommand {
    constructor(valueToMultiply) {
        this.value = valueToMultiply;
    }

    execute(value) {
        const res = this.value * value;
        const fixed = res.toFixed(3);
        return res % 1 ? Number(fixed) : res;
    }
}
