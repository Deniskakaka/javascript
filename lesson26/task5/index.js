export function maxFibonacci(value) {
    return value <= 1 ? value : maxFibonacci(value - 1) + maxFibonacci(value - 2);
}
