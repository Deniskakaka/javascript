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