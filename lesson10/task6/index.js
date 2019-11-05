function getRandomNumbers(length, min, max) {
    const mass = [];
    max = Math.trunc(max);
    min = Math.trunc(min)
    if (max < min) {
        return null;
    }
    if (!Number.isInteger(max - min)) {
        return null;
    }

    for (let i = 0; i < length; i++) {
        mass.push(Math.round(min + Math.random() * (max - min)));
    }
    return mass;

};