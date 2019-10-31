const m = 2;
const n = 20;
let result = 0;

for (let i = 0; i <= n; i++) {
    if (i % 5 === 0) {
        console.log(result);
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    } else if (i % 2 == 0 && i % 4 != 0) {
        result += i;
    } else {
        continue;
    }
}