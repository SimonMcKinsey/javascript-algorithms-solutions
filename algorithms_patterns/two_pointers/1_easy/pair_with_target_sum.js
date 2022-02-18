/**
    Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
    Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 */

const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] + arr[right] === target_sum) {
      return [left, right];
    }

    if (arr[left] + arr[right] > target_sum) {
      right--;
    } else {
      // bigger
      left++;
    }
  }

  return [-1, -1];
};

const result1 = pair_with_targetsum([1, 2, 3, 4, 6], 6);
const result2 = pair_with_targetsum([2, 5, 9, 11], 11);
const result3 = pair_with_targetsum([2, 3, 4, 6, 9, 12], 6);
const result4 = pair_with_targetsum([2, 3, 4, 6, 9, 12], 4);
const result5 = pair_with_targetsum([2, 3, 4, 6, 9, 12], 1);

console.log(result1); // [1,3]
console.log(result2); // [0, 2]
console.log(result3); // [0, 2]
console.log(result4); // [0, 0] (2+2)
console.log(result5); // [-1, -1]
