// Project Euler: Problem 3

const log = require("./helper");

function findPrimes(num) {
  pNums = [];
  let not_prime = false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      not_prime = true;
      //   log(not_prime);
    } else {
      pNums.push(i);
    }
  }
}

// findPrimes(600851475143);
