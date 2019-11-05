function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    }
    if (!Number.isInteger(max - min)) {
        return null;
    }
    max = Math.trunc(max);
    min = Math.trunc(min)
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(min + Math.random() * (max - min)));
    }
    return mass;

};