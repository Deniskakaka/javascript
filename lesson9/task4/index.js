function getPeople(obj) {
    const arr = Object.values(obj);
    let mas = arr.map(i => i.map(j => { return j.name }));
    let newMas = mas.reduce((acc, i) => {
        return acc.concat(i);
    }, []);
    return newMas;
};