import { uniqueCount } from './index.js'

it('should number of unique numbers', () => {
    let result = uniqueCount([1, 2, 4, 4, 5, 6, 5, 5, 6, 7, 7]);
    let wrong = uniqueCount([]);
    expect(result).toEqual(6);
    expect(wrong).toEqual(null);

});