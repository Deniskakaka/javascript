export function getOwnProps(obj) {
    let mas = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i) && typeof(obj[i]) != 'function') {
            mas.push(i)
        }
    }
    return mas;
};