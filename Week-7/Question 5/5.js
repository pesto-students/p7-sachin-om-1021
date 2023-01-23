/* Question
Given an one-dimensional unsorted array A containing N integers.
You are also given an integer B, find if there exists a pair of elements 
in the array whose difference is B.
Return 1 if any such pair exists else return 0. */

//! TC->O(N)  SC->O(N)
function pairWithDiff(arr, x) {
  //* copying elements of array in a map to quickly access them
  const map = new Map(arr.map((obj) => [obj, 1]));
  let valueToFind;
  for (let element of arr) {
    valueToFind = x + element;
    if (map.has(valueToFind)) return 1;
  }
  return 0;
}

const arr = [5, 10, 3, 2, 50, 80];

console.log(pairWithDiff(arr, 78));
