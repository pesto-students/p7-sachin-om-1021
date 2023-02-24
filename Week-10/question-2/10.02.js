/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:The left subtree of a node contains only nodes with keys less 
than the node's key. Theright subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees 

 */

var helper = (root, mini, maxi) => {
  if (root === null) return true;

  if (!(root.val > mini && root.val < maxi)) return false;
  let bool1 = helper(root.left, mini, root.val);
  let bool2 = helper(root.right, root.val, maxi);

  return bool1 && bool2;
};

var isValidBST = function (root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
