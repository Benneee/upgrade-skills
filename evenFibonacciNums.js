// Project Euler: Even Fibonacci Numbers
const log = require("./helper");

function fib(n) {
  const result = [1, 2];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  let results = result;
  if (Array.isArray(results) === true) {
    let sum = results
      .filter(result => result % 2 === 0)
      .reduce((x, y) => x + y, 0);
    log(sum);
    return sum;
  }
}
fib(32);
