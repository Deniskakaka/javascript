export const sumOfSquares = function() {
    let arr = [...arguments];
    let mas = arr.map(i => i * i).reduce((acc, i) => acc + i);
};