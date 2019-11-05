function getPeople(obj) {
    const arr = Object.entries(obj);
    const mas = [];
    arr.forEach(i => {
        i[1].forEach(j => {
            for (let q in j) {
                mas.push(j[q])
            }
        });
    });
    return mas;
};