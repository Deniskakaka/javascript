export function getTotalPrice(arr) {
    let sum = 0;
    if (arr.length < 1) {
        return null;
    }
    sum = arr.reduce((acc, number) => {
        return acc += number;
    });
    return '$' + Math.floor(sum * 100) / 100;
};