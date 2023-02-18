/*
Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element
for each element of the array in order of their appearance in the array.

Next greater element of an element in the array is the nearest element on the rightwhich 
is greater than the current element. If there does not exist next greater of currentelement,
 then next greater element for current element is -1. 
For example, next greater of the last element is always -1

Input:
N = 4, arr[] = [1 3 2 4]
Output:3 4 4 -1
Explanation:In the array,the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? 
since it doesn't exist, it is -1
*/


//! TC-> O(N), SC-> O(N)

let nextGreaterElement = function (nums, n) {
  let stack = [];
  //! storing only indexes not the value
  let nextGreaterElement = new Array(n);
  for (let i = 0; i < n; i++) {
    //! here stack.length-1 represents the top of the stack
    //! since stack only stores the indexes we use nums array to access values
    while (nums[stack[stack.length - 1]] < nums[i] && stack.length !== 0) {
      /* we assign the next greater element of the number to its corresponding
       index in nextGreaterElement array */
      nextGreaterElement[stack[stack.length - 1]] = nums[i];
      stack.pop();
    }
    stack.push(i);
  }

  //* remaining elements dont have any NGE so we assign -1 at there corresponding indexes
  while (stack.length) {
    nextGreaterElement[stack[stack.length - 1]] = -1;
    stack.pop();
  }
  return nextGreaterElement;
};

const arr = [1, 3, 2, 4];
// output -> [ 3, 4, 4, -1 ]
console.log(nextGreaterElement(arr, 4));
const arr1 = [6, 8, 0, 1, 3];
// output -> [ 8, -1, 1, 3, -1 ]
console.log(nextGreaterElement(arr1, 5));
