export function maxFibonacci(value) {
  let fibonacci = [0, 1];
  for (i = 2; i < value; i ++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  if (value === 1) {
    return value
  }
  for (let i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] >= value) {
      return fibonacci[i - 1]
    }
  }
}
