function hasDuplicates(arr) {
  const set = new Set(arr);
  return set.size !== arr.length;
}

const arr = [1, 2, 3, 3];

console.log(hasDuplicates(arr));
