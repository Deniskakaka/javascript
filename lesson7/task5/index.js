function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const mass = arr.map(i => { return i * i });
    return mass;
};