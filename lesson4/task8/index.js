let sum = 0;
for (let i = 0; i <= 1000; i++) {
    sum += i;
}
let del = sum / 1234;
let proc = sum % 1234;

console.log(del > proc)