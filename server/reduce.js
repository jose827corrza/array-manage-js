const numbers = [1, 2, 3, 4, 5, 6];

const total = numbers.reduce((sum, currentValue) => sum + currentValue, 0)
console.log(total);