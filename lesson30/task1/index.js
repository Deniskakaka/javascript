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
        
const asyncSum = (...asyncNumber) => {
    return Promise.all(asyncNumber)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
};



const Num1 = getValueWithDelay('', 2000);
const Num2 = getValueWithDelay('dfs', 1000);
const Num3 = getValueWithDelay(undefined, 2000);        
asyncSum(Num1, Num2, Num3, Promise.reject(new Error('wopa')))
     .then(result => console.log(result));