function getPeople(obj) {
    const arr = Object.values(obj);
    let mas = arr.map(i => i.map(j => { return j.name })).flat();
    return mas;
};

getPeople({
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },

    ],
    room2: [
        { name: 'room2 name1' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },

    ]
})