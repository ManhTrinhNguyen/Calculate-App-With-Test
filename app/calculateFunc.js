function calculateFunc(n1, operator, n2) {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  if (result.toString().includes(".")) {
    return Number(parseFloat(result).toFixed(1)) 
  } else {
    return result
  }
}

console.log(calculateFunc(-2, 'multiply', -2));

module.exports = calculateFunc;
