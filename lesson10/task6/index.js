function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    }
    if ((Math.abs(max) - Math.abs(min)).toFixed(1) === 0.0) {
        getRandomInt(0, 0)
    }
    if ((getRandomInt(min, max) === 1)) {
        return null
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

console.log(getRandomNumbers(100, 1.1, 1.9));
console.log(getRandomNumbers(100, -0.1, 0.1));