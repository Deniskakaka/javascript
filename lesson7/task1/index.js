function getSpecialNumbers(arr) {
    const copy = [...arr];
    return copy.filter(i => { return i % 3 === 0 });
};