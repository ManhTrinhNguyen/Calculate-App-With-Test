const calculateFunc = require("./calculateFunc");

// Test with Positive Number
describe('test with Positive Number', () => {
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
});

// Test With Negative Number 
describe('test with Negative Number', () => {
  test('test with add', () => {
    expect(calculateFunc(-2, 'add', -2)).toBe(-4)
    expect(calculateFunc(-2, 'add', 2)).toBe(0)
  });

  test('test with subtract', () => {
    expect(calculateFunc(-2, 'subtract', -2)).toBe(0)
    expect(calculateFunc(-2, 'subtract', 2)).toBe(-4)
  });

  test('test with multiply', () => {
    expect(calculateFunc(-2, 'multiply', -2)).toBe(4)
    expect(calculateFunc(-2, 'multiply', 2)).toBe(-4)
  });

  test("test with divide", () => {
    expect(calculateFunc(-2, "divide", -2)).toBe(1);
    expect(calculateFunc(-2, 'divide', 2)).toBe(-1)
  });
})