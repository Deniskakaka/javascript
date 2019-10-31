const m = 1;
const n = 7;
let result = 1;
let a = m;

do {
    a++;
    if (a % 2 == 1) {
        console.log(result *= a);
    }
} while (a <= n);