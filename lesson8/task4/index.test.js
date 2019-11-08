import { getAdults } from './index.js'

it('should return people >= 18', () => {
    let result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    let result2 = getAdults({});
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
    expect(result2).toEqual({});
});