import { getOwnProps } from './index.js'

it('should return array properties object', () => {
    let result = getOwnProps({ name: 'valody', fun() { return this.name } });
    expect(result).toEqual(["name"]);
});