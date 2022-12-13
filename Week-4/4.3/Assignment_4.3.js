// first approach
// here you can pass your own custom value
const obj = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let f0 = 0;
    let f1 = 1;
    return {
      next: () => {
        if (i++ <= n) {
          [value, f0, f1] = [f0, f1, f0 + f1];
          done = false;
          return { value, done };
        } else return { done: true };
      },
    };
  },
});

for (let x of obj(7)) {
  console.log(x);
}

// second approach

const obj2 = {
  n: 7,
  [Symbol.iterator]() {
    let i = 1;
    let f0 = 0;
    let f1 = 1;
    return {
      next: () => {
        if (i++ <= this.n) {
          [value, f0, f1] = [f0, f1, f0 + f1];
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let x of obj2) {
  console.log(x);
}
