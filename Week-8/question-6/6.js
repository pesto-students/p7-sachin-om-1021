class Stack {
  constructor() {
    this.st = [];
  }
  push(val) {
    this.st.push(val);
  }
  pop() {
    return this.st.pop();
  }
  print() {
    this.st.forEach((e) => console.log(e));
  }
  length() {
    return this.st.length;
  }
}

//* TC for pop -> O(N) , SC -> O(N) cause we are using 2 stacks

class TwoStackQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(val) {
    this.s1.push(val);
  }
  pop() {
    while (this.s1.length()) {
      this.s2.push(this.s1.pop());
    }
    let ans = this.s2.pop();
    while (this.s2.length()) {
      this.s1.push(this.s2.pop());
    }
    return ans;
  }

  print() {
    this.s1.print();
  }
}

const q1 = new TwoStackQueue();

for (let i = 1; i <= 10; i++) {
  q1.push(i);
}
//* queue with 10 elements.
// 1,2,3,4,5,6,7,8,9,10
q1.print();

//* popped the first element i.e 1
q1.pop();

//* queue after removing an element from the rear
//2,3,4,5,6,7,8,9,10
q1.print();
