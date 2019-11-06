function getRandomNumbers(length, min, max) {
    const mass = [];
    if (max < min) {
        return null;
    }
    if ((max - min) < 1) {
        return null;
    }

    for (let i = 0; i < length; i++) {
        mass.push(Math.round(Math.random() * (max - min) + min));
    }
    console.log(mass);
};

getRandomNumbers(10, 1, 5);