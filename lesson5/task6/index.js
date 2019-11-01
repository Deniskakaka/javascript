function getPrimes(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i % 1 === 0) {
            console.log(i)
        }
    }
}

getPrimes(70)