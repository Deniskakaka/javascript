function superRound(number, float) {
    let whole = parseInt(number);
    let fraction = Number((number - whole).toFixed(float));
    return [Math.floor(number) + fraction, Math.round(number) + fraction, Math.ceil(number) + fraction, Math.trunc(number) + fraction, Number(number.toFixed(float))]
}