function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    } else if (!Number.isInteger(max - min)) {
        return null;
    } else {
        for (let i = 0; i < length; i++) {
            mass.push(Math.floor(min + Math.random() * (max - min)));
        }
        return mass;
    }

};