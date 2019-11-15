let arr = [];
export const createArrayOfFunctions = (number) => {
    for (let i = 0; i < number; i++) {
        return arr[i] = function() {
            return i
        }
    }
};