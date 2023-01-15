/*
Problem Description Given a matrix of m * n elements 
(m rows, n columns), return all elements of the matrix in 
spiral order.
Example: Given matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
You should return [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

//! TC-> O(M*N) , SC-> O(N) for result array

var spiralOrder = function (matrix) {
  const result = [];
  let row = matrix.length;
  let col = matrix[0].length;

  //Index initialization
  let startingRow = 0;
  let startingCol = 0;
  let endingRow = row - 1;
  let endingCol = col - 1;
  let count = 0;
  let total = row * col;

  while (count < total) {
    //* iterate starting row
    for (
      let index = startingCol;
      count < total && index <= endingCol;
      index++
    ) {
      result.push(matrix[startingRow][index]);
      count++;
    }
    startingRow++;

    //* iterate ending column
    for (
      let index = startingRow;
      count < total && index <= endingRow;
      index++
    ) {
      result.push(matrix[index][endingCol]);
      count++;
    }
    endingCol--;

    //* iterate ending row
    for (
      let index = endingCol;
      count < total && index >= startingCol;
      index--
    ) {
      result.push(matrix[endingRow][index]);
      count++;
    }
    endingRow--;

    //* iterate starting column
    for (
      let index = endingRow;
      count < total && index >= startingRow;
      index--
    ) {
      result.push(matrix[index][startingCol]);
      count++;
    }
    startingCol++;
  }
  return result;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(arr));
// output -> [1, 2, 3, 6, 9, 8, 7, 4, 5]
