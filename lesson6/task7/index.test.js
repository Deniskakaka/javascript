import { sortAsc, sortDesc } from './index.js'

it('should retrun sort Asc', () => {
    const result = sortAsc([3, 6, 1, 8]);
    const wrong = sortAsc('dsfsfs' || 12 || true || function() {});
    expect(result).toEqual([1, 3, 6, 8]);
    expect(wrong).toEqual(null);
});

it('should retrun sort Desc', () => {
    const result = sortDesc([3, 6, 1, 8]);
    const wrong = sortDesc('dsfsfs' || 12 || true || function() {});
    expect(result).toEqual([8, 6, 3, 1]);
    expect(wrong).toEqual(null);
});