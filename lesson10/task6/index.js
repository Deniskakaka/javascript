function getRandomNumbers(length, min, max) {
    const mass = [];
    max = Math.trunc(max);
    min = Math.trunc(min)
    if (max < min || (max - min) < 1) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(min + Math.random() * (max - min)));
    }
    return mass;

};