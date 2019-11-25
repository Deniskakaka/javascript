export const defer = (func, ms) => {
    return function() { setTimeout(() => func.call(this, ...args), ms); }
};