function concatProps(obj) {
    let mass = [];
    for (let i in obj) {
        mass = mass.concat(obj[i]);
    };
    return mass;
}