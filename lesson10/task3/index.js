function multiRound(number) {
    return [Math.floor(number), Math.round(number), Math.ceil(number), Math.trunc(number), Number(number.toFixed())];
};