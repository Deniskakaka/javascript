export function delay(time) {
   const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(resolve));
        },time);
    });
    return p;
};