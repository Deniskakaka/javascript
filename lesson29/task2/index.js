export const asyncCalculator = value =>  new Promise ((resolve) => {
    setTimeout(() => {
        console.log(`Initial value: ${value}`);
        resolve(value);
    },500);

}).then(value => new Promise((resolve) => {
    setTimeout(() => {
        let result = value * value;
        console.log(`Squared value: ${result}`);
        resolve(result);
    },500);
})).then(value => {
    let result = value * 2;
    console.log(`Doubled value: ${result}`);
});
//asyncCalculator(5);