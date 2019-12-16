export function maxFibonacci(n) {
  let a = 0, b = 1;
  if(n < 1) {
    return 0;
  }
  for (let i = 0; i <= n; i++) {
    if (a > n) {
      return b - a;
    } else {
      b = a + b;
      a = b - a;
    }
  }         
  return a;
};

console.log(maxFibonacci(5.7))