/* Question 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock andchoosing a 
different day in the future to sell that stock.Return the maximum profit youcan achieve from 
this transaction. If you cannot achieve any profit, return 0
Example 1: Input: prices = [7,1,5,3,6,4] Output: 5
*/

//! TC->O(N), SC->O(1)

var maxProfit = function (prices) {
  let mini = prices[0]; //* initial minimum price
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    //* selecting the maximum profit
    profit = Math.max(prices[i] - mini, profit);
    //* filtering the minimum element from previous days
    mini = Math.min(prices[i], mini);
  }
  return profit;
};

const arr = [7, 1, 5, 3, 6, 4];
//* output 5
console.log(maxProfit(arr));
