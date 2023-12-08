const calculateFunc = require("./calculateFunc");

test("test with add", () => {
  expect(calculateFunc(2, "add", 2)).toBe(4);
});

test("test with subtract", () => {
  expect(calculateFunc(2, "subtract", 2)).toBe(0);
});

test("test with multiply", () => {
  expect(calculateFunc(2, "multiply", 2)).toBe(4);
});

test("test with divide", () => {
  expect(calculateFunc(2, "divide", 2)).toBe(1);
});
