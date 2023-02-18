/* Detect Loop in a Linked List
Given a linked list of N nodes. The task is to check if the linked list has a loop.
Linkedlist can contain self loop.
Example 1:
Input:N = 3value[] = {1,3,4} 
x = 2Output: 
TrueExplanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is givenwhich means last node is connected with xth node of linked list. 
Therefore, there exists a loop
*/

//! TC-> O(N), SC->O(1);

var hasCycle = function (head) {
  if (!head) return false;
  let slow = head; // slow pointer which increment by single node
  let fast = head.next; // fast pointer which increments two nodes in a single iteration

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // if both pointers meets at a point then there exists a loop
    if (slow === fast) return true;
  }

  return false;
};
