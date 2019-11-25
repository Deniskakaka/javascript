export const sumOfSquares = function() {
    let arr = [...arguments];
    return arr.map(i => i * i).reduce((acc, i) => acc + i);
};