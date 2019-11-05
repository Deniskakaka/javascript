function getRandomNumbers(length, min, max) {
    const mass = [];
    for (let i = 0; i <= length; i++) {
        mass.push(Math.floor(Math.random() * (max - min + 1)) + max);
    }
    return mass;
}