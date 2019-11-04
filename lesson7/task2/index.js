function sortDesc(arr) {
    const mass = [...arr];
    return mass.sort((a, b) => { return b - a });
};