export function delay(delay,callback,context,...args) {
   return  setTimeout(() => {
        callback().apply(context,[args]);
    },delay);
}