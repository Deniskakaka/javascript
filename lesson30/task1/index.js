function getSum(numbers) {
    numbers.filter(value => !isNaN(value))
           .reduse((acc,num) => acc + Number(num), 0);
}
export const asyncSum = (...asyncNumber) => {
    return Promise.all(asyncNumber)
        .then(number => getSum(number))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
}