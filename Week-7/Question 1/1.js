/* 
Find the contiguous subarray within an array, A of length N which has the 
largest sum.Input Format:The first and the only argument contains an integer
array, A.
Output Format: Return an integer representing the maximum possible sum of the
contiguous subarray.
Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000
*/

//! Using kadane's algorithim
//* TC->O(N) , SC->O(1)

function maxSumSubArr(arr) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER; //* minimum integer value
  arr.forEach((e) => {
    currSum += e;
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) currSum = 0;
  });
  return maxSum;
}

const arr = [1, 2, 3, 4, -10];
console.log(maxSumSubArr(arr)); //* output 10
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubArr(arr2)); //* output 6
const arr3 = [-1]; //* output -1
console.log(maxSumSubArr(arr3));
