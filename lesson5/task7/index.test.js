import { increaser } from './index.js'

it('show return first parametr + second parametr', () => {
    const ifMore = increaser(10, 3);
    expect(ifMore).toEqual(13);
});

it('show return first parametr + second parametr', () => {
    const ifFew = increaser(3, 10);
    expect(ifFew).toEqual(3);
});