function getFiniteNumbers(arr) {
    return arr.map(i => { return Number.isFinite(i) });
};