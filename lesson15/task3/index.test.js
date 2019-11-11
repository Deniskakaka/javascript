import { createLogger } from './index.js'

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('q');
    let result = logger.getRecords('warm')[0].type;
    expect(result).toEqual('warm');
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('q');
    let result = logger.getRecords('warm')[0].message;
    expect(result).toEqual('q');
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('q');
    let result = logger.getRecords('log');
    expect(result).toEqual([]);
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('q');
    logger.log('l');
    let result = logger.getRecords('error');
    expect(result).toEqual([]);
});