const m = 1;
const n = 7;
let result = 1;
let a = m;

do {
    if (a % 2 == 1) {
        result *= a;
    }
    a++;
} while (a < n);

console.log(result)