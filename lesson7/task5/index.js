function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    } else {
        let copy = [...arr]
        let mass = copy.map(i => { return i * i });
    }

    return mass;
};