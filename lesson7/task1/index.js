function getSpecialNumber(arr) {
    let copy = [...arr];
    return copy.filter(i => { return i % 3 === 0 });
};