function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min || (max - min < 1) && Math.ceil(max) === Math.ceil(min)) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(getRandomInt(min, max))
    };
    return mass;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomNumbers(100, 1.3, 1.9));
console.log(getRandomNumbers(100, -0.1, 0.1));