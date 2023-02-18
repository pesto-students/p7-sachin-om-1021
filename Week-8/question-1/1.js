/*  Reverse a linked List
Given a linked list of N nodes. The task is to reverse this list.
Example 1:
Input:
LinkedList: 1->2->3->4->5->6
Output: 
6 5 4 3 2 1
Explanation: After reversing the list,elements are 6->5->4->3->2->
 */

//! TC-> O(N), SC->O(1)

class Node {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class SingleLinedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.size = 1; //* maintaining the size of LinkedList
  }

  //* insertion at the end
  append(element) {
    //create a new node
    const newNode = new Node(element);

    //* if list is empty append node as the head
    if (this.head === null) this.head = newNode;
    else {
      let temp = this.head;
      //* iterate till the last node
      while (temp.next !== null) {
        temp = temp.next;
      }
      //* append node
      temp.next = newNode;
    }
    this.size++;
  }
  printList() {
    let array = ["Head"];
    let temp = this.head;
    while (temp) {
      array.push(temp.value);
      temp = temp.next;
    }
    array.push("null");
    console.log(array.join(" --> "));
    return;
  }
  setHead(pointer) {
    // to set the head to newHead
    this.head = pointer;
  }
}

let ll = new SingleLinedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

ll.printList(); // Head --> 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> null

// reverse a linked list function

var reverseList = function (ll) {
  let prev = null;
  let next = null;
  let curr = ll.head;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev; //* breaking and reversing the link
    prev = curr; //* moving the pointers ahead
    curr = next;
  }
  return prev; //* return a head pointer of reversed List
};

const newHead = reverseList(ll);
ll.setHead(newHead); //* setting new head for the list
ll.printList(); // Head --> 5 --> 4 --> 3 --> 2 --> 1 --> 0 --> null
