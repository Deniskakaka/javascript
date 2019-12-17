export function asyncSum(...asyncNumbers) {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

function getSum(numbers) {
    return numbers
        .filter(elem => !isNaN(elem))
        .reduce((acc, elem) => acc + Number(elem), 0);
};
