const changeSign = (item) =>
    item.indexOf('-') === -1 ? `-${item}` : item.slice(1);

const restoreDotItem = (item) => {
    if (item === '.') return 0;
    if (item === '-.') return -0;
    return Number(item);
};

export default (item, history, formula) => {
    if (!item) return false;
    if (!Number.isNaN(Number(item)) || item === '.' || item === '-.') {
        history.pop();
        formula.pop();
    }
    item = changeSign(item);
    history.push(item.toString());
    formula.push(restoreDotItem(item));
    return item;
};
