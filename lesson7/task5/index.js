function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let mass = arr.map(i => { return i * i });
    return mass;
};