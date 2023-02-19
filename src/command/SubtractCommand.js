export default class SubtractCommand {
    constructor(valueToSubtract) {
        this.value = valueToSubtract;
    }

    execute(value) {
        const res = this.value - value;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }
}
