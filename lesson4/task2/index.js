const m = 1;
const n = 7;
let result = 1;
let a = m;

do {
    a++;
    if (a % 2 == 1) {
        result *= a;
    }
    console.log(result);
} while (a <= n);