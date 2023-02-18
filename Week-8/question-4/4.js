/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Every close bracket has a corresponding open bracket of the same type.
 Input: s = "()[]{}"
 Output: true
 */

//! TC-> O(N), SC->O(N)

let isValid = function (s) {
  //* return false if odd number of paranthesis
  if (!s.length % 2) {
    return false;
  }

  let temp;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    //* if it is an opening paranthesis then push into stack
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") stack.push(s[i]);
    else {
      if (!stack.length) return false;

      //* comparing the order of paranthesis each opening should have closing
      temp = stack.pop();
      if (
        (temp === "{" && s[i] === "}") ||
        (temp === "(" && s[i] === ")") ||
        (temp === "[" && s[i] === "]")
      )
        continue;
      else return false;
    }
  }
  if (!stack.length) return true;
  else return false;
};

const s = "[{()}]";
console.log(isValid(s)); // true
const y = "[({)}]";
console.log(isValid(y)); // false
