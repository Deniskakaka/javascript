let arr = [];
export const createArrayOfFunctions = (number) => {
    if (typeof number !== 'number') {
        return null;
    }
    if (number === undefined) {
        return [];
    }
    for (let i = 0; i < number; i++) {
        arr[i] = function() {
            return i
        }
    }
    return arr;
};