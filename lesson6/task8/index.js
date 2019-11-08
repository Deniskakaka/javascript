export const uniqueCount = array => {
    let mas = [];
    for (let i = 0; i < array.length; i++) {
        if (mas.indexOf(array[i]) < 0) {
            mas.push(array[i])
        }
    }
    return mas.length > 0 ? mas.length : null;
}