/* Question 
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, 
target.Return the sum of the three integers.Assume that there will only one solution
Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2.
(-1 + 2 + 1 = 2) 
*/

//! TC->O(N^2), SC->O(1)

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); //* sorting array in order to use two pointer approach
  //* variable declaration
  let diff; //* to hold the difference
  let min = Number.MAX_SAFE_INTEGER; //* to hold the minimum difference
  let sum; //* to hold the currentsum
  let closestSum; //* to hold the sum closest to taget
  let start; //* starting index pointer;
  let end; //* ending index pointer

  for (let index = 0; index < nums.length - 2; index++) {
    start = index + 1;
    end = nums.length - 1;
    while (start < end) {
      //* using two pointer approach
      sum = nums[index] + nums[start] + nums[end];
      //* difference will always to be considered positive
      diff = Math.abs(target - sum);
      if (sum == target) {
        return sum;
      } else if (sum > target) end--;
      else start++;
      if (diff < min) {
        min = diff;
        closestSum = sum;
      }
    }
  }
  return closestSum;
};

const arr = [-1, 2, 1, -4];
console.log(threeSumClosest(arr, 1));
