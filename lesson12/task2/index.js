function reverseString(string) {
    if (typeof string != 'string') {
        return null;
    }
    let arr = string.split('').reverse().join('');
    return arr;
}

console.log(reverseString('wdfsdfsdfs'))