const mathOperations = {
  sum: (a, b) => a + b,
  diff: (a, b) => a - b,
  product: (a, b) => a * b,
  division: (a, b) => a / b,
};

test("check for additition (2 + 4) = 6 ", () => {
  expect(mathOperations.sum(2, 4)).toBe(6);
});

test("check for subtraction (4 - 2) = 2 ", () => {
  expect(mathOperations.diff(4, 2)).toBe(2);
});

test("check for multiplication  (2 x 4) = 8 ", () => {
  expect(mathOperations.product(2, 4)).toBe(8);
});

test("check for Division  (100 / 3) = 33.33 ", () => {
  expect(mathOperations.division(100, 3)).toBeCloseTo(33.33);
});
