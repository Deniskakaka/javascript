import { getTotalPrice } from './index.js'

it("should return sum  element array in string", () => {
    let result = getTotalPrice([12, 23.5, 54.6, 44.43]);
    let result2 = getTotalPrice(['asdas', 'asdas']);
    let result3 = getTotalPrice([]);
    expect(result).toEqual('$134.53');
    expect(result2).toEqual('$NaN');
    expect(result3).toEqual(null);
});