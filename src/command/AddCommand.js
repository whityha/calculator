export default class AddCommand {
    constructor(valueToAdd) {
        this.value = Number(valueToAdd);
    }

    execute(value) {
        const res = this.value + value;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }
}
