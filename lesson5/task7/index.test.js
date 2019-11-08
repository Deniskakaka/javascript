import { increaser } from './index.js'

it('show return first parametr + second parametr', () => {
    const ifMore = increaser(10, 3);
    const ifFew = increaser(3, 10);
    expect(ifMore).toEqual(13);
    expect(ifFew).toEqual(3);
});