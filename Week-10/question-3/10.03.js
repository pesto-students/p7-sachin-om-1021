/* Binary Tree Level order traversal
Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e.,from left to right, level by level). */

var levelOrder = function (root) {
  let queue = [];
  if (root === null) return queue;
  let ans = [];
  queue.push(root);
  while (queue.length) {
    let levels = queue.length;
    let subans = [];
    for (let i = 0; i < levels; i++) {
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);

      subans.push(queue.shift().val);
    }
    ans.push(subans);
  }
  return ans;
};
