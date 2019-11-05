function getAdults(obj) {
    return Object.entries(obj).filter(i => { return i[1] >= 18 }).map(i => { return i[0] });

};