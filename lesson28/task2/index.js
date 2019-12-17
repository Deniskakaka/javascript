function delay(time) {
    return setTimeout(() => {
        const p = new Promise((resolve, reject) {
            return resolve('Done');
        });
    },time)
};