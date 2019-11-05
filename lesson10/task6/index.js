function getRandomNumbers(length, start, finish) {
    const mass = [];
    max = Math.trunc(finish);
    min = Math.trunc(start);
    if (max < min || (max - min) < 1) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(min + Math.random() * (max - min)));
    }
    return mass;

};