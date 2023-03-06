export default (string) => {
    if (string === '.') return 0;
    if (string === '-.') return 0;
    return Number(string);
};
