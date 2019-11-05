function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    } else if (!Number.isInteger(max - min)) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(Math.ceil(min + Math.random() * (max - min)));
    }
    return mass;

};