export function createLogger() {
    let logger = [];

    function warm(str) {
        logger.push({
            message: str,
            dateTime: new Date(),
            type: 'warn'
        })
    };

    function error(str) {
        logger.push({
            message: str,
            dateTime: new Date(),
            type: 'error'
        });
    };

    function log(str) {
        logger.push({
            message: str,
            dateTime: new Date(),
            type: 'log'
        })
    };


    function getRecords(str) {
        let result = [];
        result = logger.filter(i => {
            if (i.type === str) {
                return i;
            }
        });
        if (!str) {
            return logger;
        } else {
            return result.sort((a, b) => {
                a.dateTime.getTime() - b.dateTime.getTime()
            });

        }
    };
    return {
        warn,
        error,
        log,
        getRecords
    };
};