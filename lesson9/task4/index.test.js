import { getPeople } from './index.js'

it('should of object array', () => {
    let result = getPeople({
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

        ],
    });
    let result2 = getPeople({});
    expect(result).toEqual(["room1 name1", "room1 name2", "room1 name3", "room1 name4", "room2 name1", "room3 name1", "room3 name2", "room3 name3"]);
    expect(result2).toEqual([]);
});