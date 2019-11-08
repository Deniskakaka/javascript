function getMaxAbsoluteNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    const mass = arr.map(i => {
        return Math.abs(i);
    });
    const max = Math.max(...mass);
    return max;
};

console.log(getMaxAbsoluteNumber([12, 23.5, 54.6, 44.43]));