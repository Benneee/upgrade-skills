const log = require('./helper');

const maxSubArray = (nums) => {
  let maxSum = 0;
  let partialSum = 0;

  // Loop through with a for-of
  for (let num of nums) {
    partialSum += num;

    // Check and compare partialSum to maxSum
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0; // Case for when all the numbers in the array is negative
    }
  }
  log(maxSum);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
