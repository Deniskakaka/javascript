function superRound(number, float) {
    let fraction = Number((number - parseInt(number)).toFixed(float));
    return fraction;
    [Math.floor(number) + fraction, Math.round(number) + fraction, Math.ceil(number) + fraction, Math.trunc(number) + fraction, Number(number.toFixed(float))]
}

console.log(superRound(-12.467567, 1));