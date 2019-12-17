export const asyncSum = (...asyncNumber) => {
    return Promise.all(asyncNumber)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
};

const getSum = (numbers) =>
    numbers
        .filter(value => !isNaN(value))
        .reduse((acc,num) => acc + Number(num), 0);