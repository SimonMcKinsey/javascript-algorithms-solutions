/*
    Given an array of sorted numbers, remove all duplicates from it. 
    You should not use any extra space; after removing the duplicates in-place return the new length of the array.
*/

function remove_duplicates(arr) {
  let windowStart = 0;

  for (let windowEnd = 1; windowEnd < arr.length; windowEnd++) {
    if (arr[windowStart] === arr[windowEnd]) {
      arr.splice(windowStart, windowEnd);
    } else {
      windowStart++;
    }
  }

  return arr.length - 1;
}

const result1 = remove_duplicates([2, 3, 3, 3, 6, 9, 9]);
const result2 = remove_duplicates([2, 2, 2, 11]);

console.log(result1);
console.log(result2);
