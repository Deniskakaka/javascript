function getRandomNumbers(length, start, finish) {
    const mass = [];
    max = Math.abs(Math.trunc(finish));
    min = Math.abs(Math.trunc(start));
    if (max < min) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(Math.floor(min + Math.random() * (max - min)));
    }
    return mass;
};