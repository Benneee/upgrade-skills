// Leetcode 30 day challenge
// Day 1

/**
 * Challenge
 *
 * Given an array with several values
 * Some of the values occur several times
 * Return the value that occurs just once
 */

/**
 * Algo
 *
 * Loop through the array
 * Check for the index of each of the array values
 * If the first index of an array value is the same as the last index of the said value, that's our answer
 */

const singleNum = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums)) {
      if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
        return nums[i];
      }
    }
  }
};

singleNum([1, 1, 2, 2, 5, 5, 7, 7, 11]);
