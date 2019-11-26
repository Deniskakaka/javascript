import { user } from './index.js'

it('should full name', () => {
    let result = user.fullName = 'Tom Hardy';
    expect(result).toEqual('Tom Hardy');
});