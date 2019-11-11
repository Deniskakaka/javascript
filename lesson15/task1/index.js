export function makeCountre() {
    let count = 0;
    return function() {
        return count++;
    }
}