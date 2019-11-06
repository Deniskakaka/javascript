function sortContacts(arr, boolen) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let mass = arr.sort((a, b) => {
        if (boolen === true || boolen === undefined) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return mass;
};