"use strict";

function returnObject() {
  const items = ["aniket", "om"];
  return {
    Push(n) {
      items.push(n);
      console.log(n + " is pushed successfully");
    },
    Pop() {
      console.log(items.pop());
    },
  };
}

const person = returnObject();

person.Push("prince");

console.log(person.items); // undefined

person.Pop();
