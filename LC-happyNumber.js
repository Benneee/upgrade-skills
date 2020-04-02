// 1. This works but not on leetcode

const log = require('./helper');
const isHappy = function(n) {
  let givenNumber = String(n).split('');
  let converted = givenNumber.map((num) => parseInt(num));
  let answer = Math.round(Math.hypot(...converted) ** 2);
  if (answer < 100) {
    isHappy(answer);
  } else {
    log(answer == 100);
  }
};

// 2. This works on leetcode
const isHappy = function(n, counter = 0) {
  result = false;
  if (counter < 8) {
    let nArray = n
      .toString()
      .split('')
      .map((n) => n * n);
    let answer = nArray.reduce((x, y) => x + y, 0);

    if (answer === 1) {
      return (result = true);
    } else {
      counter++;
      isHappy(answer, counter);
    }
  }
  log(result);
};

isHappy(19);
