import { getCustomersList } from './index.js'

it('should return of object array', () => {
    let result = getCustomersList({
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
    });
    expect(result).toEqual([{
            name: 'Tom',
            age: 17,
            id: 'customer-id-2'
        },
        {
            name: 'William',
            age: 54,
            id: 'customer-id-1'
        },
    ]);
});

it('should return of object array', () => {
    let result2 = getCustomersList({});
    expect(result2).toEqual([]);
});