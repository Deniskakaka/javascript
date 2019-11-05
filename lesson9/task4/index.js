function getPeople(obj) {
    const arr = Object.entries(obj);
    const mas = [];
    arr.forEach(i => {
        i[1].forEach(j => {
            if (!Array.isArray(j)) {
                for (let q in j) {
                    mas.push(j[q])
                }
            } else {
                j.forEach(w => {
                    for (let q in w) {
                        mas.push(w[q])
                    }
                });
            }
        });
    });
    return mas;
};