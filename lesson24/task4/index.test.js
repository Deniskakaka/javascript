import {studentsBirthDays} from './index.js'

it('should return obj arrays', () => {
    let mass = [
        {
            name :'vasy',
            'birthDate' : '01/22/1993'
        },
        {
            name :'koly',
            'birthDate' : '01/20/1991'
        },
        {
            name :'masha',
            'birthDate' : '11/10/1996'
        },
        {
            name :'vany',
            'birthDate' : '01/19/1992'
        },
    ];
    let result = studentsBirthDays(mass);
    expect(result).toEqual({'Jan':['vany','koly','vasy'],'Nov':['masha']});
});