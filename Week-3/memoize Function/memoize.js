/* Memoization is a technique for speeding up applications
  by caching the results of expensive function calls and returning 
  them when the same inputs are used again. */

//reducer function (factorial of a number)

function fact(n) {
  if (n <= 1) {
    return n;
  }
  return n * fact(n - 1);
}

// memoization : creating a memoize function to cache the values.

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

// time function to determine execution time of each function call

function time(fn) {
  console.time();
  fn();
  console.log(fn());
  console.timeEnd();
}

// execution

const factm = memoize(fact);

time(() => factm(100));
time(() => factm(100));
time(() => factm(100));

time(() => factm(20));
time(() => factm(20));
time(() => factm(20));
