function getRandomNumbers(length, min, max) {
    const mass = [];
    let random = Math.trunc(min + Math.random() * (max - min))
    if (max < min) {
        return null;
    } else if (!Number.isInteger(max - min)) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(random);
    }
    return mass;

};