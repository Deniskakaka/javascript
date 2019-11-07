import { getMinSquaredNumber } from './getMinSquaredNumber.js'

it('should get squared numbers array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    const string = getMinSquaredNumber('sdsdfsdf');
    const empty = getMinSquaredNumber([]);
    expect(result).toEqual(4);
    expect(string).toEqual(null);
    expect(empty).toEqual(null);
});