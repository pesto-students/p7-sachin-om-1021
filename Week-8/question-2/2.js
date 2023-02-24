/* Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3] */

//! TC->O(N), SC->O(1)

var rotateRight = function (head, k) {
  if (head === null) return head;
  let tail = head;
  let size = 1;

  // iterating till last node to find tail and size
  while (tail.next !== null) {
    tail = tail.next;
    size++;
  }

  // making a circular ll
  tail.next = head;

  let jump = size - (k % size); // used modulo in case k > size
  while (jump) {
    // moving tail and head pointer till we reach the point
    head = head.next;
    tail = tail.next;
    jump--;
  }
  tail.next = null; // removing the link

  return head;
};
