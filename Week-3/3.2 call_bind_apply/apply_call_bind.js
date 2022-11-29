"use strict";

// -----------------------------------------.call()----------------------------------

function intro(year) {
  return (
    this.name +
    " studies in " +
    year +
    " year and is in " +
    this.sem +
    " semester"
  );
}

let obj = {
  name: "Om Dubey",
  sem: "5th",
  cgpa: 9.5,
  print: function () {
    console.log(intro.call(this, "3rd") + " holding cgpa " + this.cgpa + "\n");
  },
};
var obj2 = {
  name: "ketan",
  sem: "7th",
  num: 2,
  cgpa: 7.6,
};

// using print method of obj
obj.print();

// using generic intro function to print details of obj2
console.log(intro.call(obj2, "4th") + "\n");

// using print method of obj to print information of obj2
obj.print.call(obj2);

// -----------------------------------------.bind()----------------------------------

// using .bind() to bind obj3 to power function

function power(a) {
  let that = this.num;
  for (let i = 1; i < a; i++) {
    that *= this.num;
  }
  console.log(
    this.num + " raised to power " + a + " results in : " + that + "\n"
  );
}

var obj3 = {
  num: 5,
};

const fn = power.bind(obj3, 3);
fn();

// -----------------------------------------.apply()----------------------------------

// using apply to pass positional arguments as an array

function printTable(a, b) {
  for (let i = 1; i <= b; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
  console.log("\n");
}

var arr = [2, 10];

printTable.apply(null, arr);

function printDetails(age, birthYear, height, weigth) {
  console.log(
    `${this.name} is ${age} years old and was born in year ${birthYear} standing ${height} cms tall weighing ${weigth} kgs`
  );
}

var obj5 = {
  name: "Om Dubey",
};

var arr2 = [20, 2002, 172, 70];

// using .apply() with an object and passing array as list of arguments
printDetails.apply(obj5, arr2);
