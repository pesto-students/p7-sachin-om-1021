const PENDING = 0;
const FULFILLED = 1;
const REJECTED = -1;


// custom promise function
function customPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;
    catchers.forEach((c) => c(value));
  }

  this.then = function (successCallback) {
    if (state === FULFILLED) successCallback(value);
    else handlers.push(successCallback);
    return this;
  };

  this.catch = function (failureCallback) {
    if (state === REJECTED) failureCallback(value);
    else catchers.push(failureCallback);
    return this;
  };

  executor(resolve, reject);
}

// function to generate random number upto 100
function getNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const isDivisible = new customPromise((resolve, reject) => {
  let x = getNumber();
  setTimeout(() => {
    if (x % 5 == 0) {
      resolve(`${x} is divisible by 5`);
    } else reject(`${x} is divisible not by 5`);
  });
}, 2000);

// promise chaining

const prom = isDivisible;
prom.then(console.log)
.then(console.log)
.catch(console.log);
