export function maxFibonacci(value) {
    if (value <= 1) {
       return value
    }
    return value - maxFibonacci(value - 1) + maxFibonacci(value - 2);

}


