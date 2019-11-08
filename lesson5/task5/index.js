export const getSum = (numStart, numEnd) => {
    let sum = 0;
    for (let i = numStart; i <= numEnd; i++) {
        i % 2 === 0 ? sum += i : 0;
    }
    return sum;
};