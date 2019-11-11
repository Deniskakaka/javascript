import { makeCountre } from './index.js'

it('should add number', () => {
    let result = makeCountre();
    let count = result();
    expect(count).toEqual(0);
});

it('should add number', () => {
    let result = makeCountre();
    result();
    let count = result();
    expect(count).toEqual(1);
});

it('should add number', () => {
    let result = makeCountre();
    result();
    result();
    let count = result();
    expect(count).toEqual(2);
});