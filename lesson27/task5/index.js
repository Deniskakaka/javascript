export function delay(delay,callback,context,...args) {
   return  setInterval(() => {
        callback().apply(context,[args]);
    },delay);
}