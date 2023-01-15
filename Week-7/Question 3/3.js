/* Question
Given an array of size N containing only 0s, 1s, and 2s; sort the array
in ascending order.
    Example 1: Input: N = 5 , arr[]= {0 2 1 2 0}
    Output:0 0 1 2 2
 */

var sortColors = function (nums) {
  //* initial starting index
  let index = 0;

  //* positioning all zeroes into place
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }

  //* positioning all 1's into place
  for (let i = index; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
};

const arr = [0, 2, 1, 2, 0];
sortColors(arr);
console.log(arr); //* output-> [ 0, 0, 1, 2, 2 ]
