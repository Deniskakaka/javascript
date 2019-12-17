function getValueWithDelay(value, delay) {
     return new Promise(resolve => {
         setTimeout(() => {
             console.log(value);
             resolve(value)
         }, delay);
     });
 };

const getSum = (numbers) =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc,num) => acc + Number(num), 0);
        
export const asyncSum = (...asyncNumber) => {
    return Promise.all(asyncNumber)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
};



const Num1 = getValueWithDelay(2, 2000);
const Num2 = getValueWithDelay(15, 1000);
const Num3 = getValueWithDelay(10, 2000);        
asyncSum(Num1, Num2, Num3)
     .then(result => console.log(result));