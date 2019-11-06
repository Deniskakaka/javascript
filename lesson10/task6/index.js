function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    }
    if ((max - min) < 1) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(getRandomIntInclusive(min, max))
    };
    return mass;
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}