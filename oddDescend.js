// OddDescend

// A function that sorts all odd numbers within an array in ascending order, but leaves the even numbers in their initial positions

const log = require("./helper");

function oddDescend(arrayOfNumbers) {
  let evenNums = [];
  let oddNums = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      evenNums.push(arrayOfNumbers[i]);
    } else {
      oddNums.push(arrayOfNumbers[i]);
    }
  }
  const sortedOddNums = oddNums.sort((a, b) => a - b);
  const allNums = evenNums.concat(...sortedOddNums);
  log(allNums);
  return allNums;
}

let arrayOfNumbers = [1, 4, 7, 3, 2, 5];
oddDescend(arrayOfNumbers);
