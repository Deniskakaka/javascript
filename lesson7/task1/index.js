function getSpecialNumber(arr) {
    const copy = [...arr];
    copy.filter(i => { return i % 3 === 0 });
    return copy;
};