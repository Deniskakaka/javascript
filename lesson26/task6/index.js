function sum(value) {
   return  value == 1 ? 1 : value + sum(value - 1)
};

console.log(sum(4))