const person = function () {};
console.log(new person());

person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
person.prototype.teach = function (subject) {
  console.log(this.name + " teaches " + subject);
};

const teacher = new person();

teacher.initialize("Sachin", 23);

teacher.teach("Javascript");
