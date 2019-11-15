import { createArrayOfFunctions } from './index.js'

it('should array functions', () => {
    let result = createArrayOfFunctions(9)[3]();
    expect(result).toEqual(3);
});

it('should array functions', () => {
    let result = createArrayOfFunctions();
    expect(result).toEqual([]);
});

it('should array functions', () => {
    let result = createArrayOfFunctions('3');
    expect(result).toEqual(null);
});