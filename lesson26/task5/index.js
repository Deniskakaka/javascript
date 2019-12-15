export function maxFibonacci(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    if (b >= n) return a
  }         
  return b;
}

console.log(maxFibonacci(0));