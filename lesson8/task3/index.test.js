import { pickProps } from './index.js'

it('should return properties', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
});

it('should return properties', () => {
    let result2 = pickProps({ a: 1, b: 2, c: 3 }, ['q', 'd']);
    expect(result2).toEqual({});
});