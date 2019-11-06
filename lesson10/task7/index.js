function superRound(num, float) {
    const digits = Math.pow(10, float);
    return [
        Math.floor(num * digits) / digits,
        Math.round(num * digits) / digits,
        Math.ceil(num * digits) / digits,
        Math.trunc(num * digits) / digits, +num.toFixed(float),
    ];
}


console.log(superRound(-12.467567, 4));