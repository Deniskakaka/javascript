function getSum(numStart, numEnd) {
    let sum = 0;
    for (let i = numStart; i <= numEnd; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};