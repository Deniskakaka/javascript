export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    arr = arr.map(i => Math.abs(i));
    let min = Math.min(...arr);
    return min * min;
};