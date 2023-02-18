/* Maximum Depth of Binary Tree
TreeGiven the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest
path from theroot node down to the farthest leaf node.
Example-1
Input: 
root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2


*/

var maxDepth = function (root) {
  if (root === null) return 0;

  let maxi = Math.max(maxDepth(root.left), maxDepth(root.right));

  return maxi + 1;
};
