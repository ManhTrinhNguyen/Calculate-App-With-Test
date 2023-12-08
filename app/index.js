const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-key");
const display = document.querySelector(".calculator_display");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    let previousKeyType = calculator.dataset.previousKeyType;
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed"),
    );

    if (!action) {
      // Number Keys 
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        // If condition above is true . Display first text 
        display.textContent = keyContent;
      } else {
        // Else If Display already have a number . Add the next number after the first
        display.textContent = displayedNum + keyContent;
      }
      // Set Previouse key type into Number by using data-action attribute . To Keep track what is previous key type
      calculator.dataset.previousKeyType = "number";
    }

    // Operator Keys 
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        // If condition above is true
          // 1. Create calValue . The calculateFunction from another file
        const calValue = calculateFunc(firstValue, operator, secondValue);
          // 2. Display the value 
        display.textContent = calValue;
          // 3. Set up the first Value by using data-action attribute . To keep track the first Value
        calculator.dataset.firstValue = calValue;
      } else {
        // If condition above is false 
          // First value is displayNum 
        calculator.dataset.firstValue = displayedNum;
      }

      // Add class to the key that clicked (CSS perform)
      key.classList.add("is-depressed");
      // Set Previouse key type into Operator by using data-action attribute . To Keep track what is previous key type
      calculator.dataset.previousKeyType = "operator";
      // Create new data-action attribute to that key type 
      calculator.dataset.operator = action;
    }

    // Decimal key
    if (action === "decimal") {
      if (!display.textContent.includes(".")) {
        // If clicked Decimal but Dispay already has a number before it add the Decimal after number
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        // else if clicked Decimal but Display don't have a number before it and previous key type is Operator or 'calculate' add "0."
        display.textContent = "0.";
      }

      // Set Previouse key type into Decimal by using data-action attribute . To Keep track what is previous key type
      calculator.dataset.previousKeyType = "decimal";
    }

    // Clear key 
    if (action !== "clear") {
      // query clear button 
      const clearButton = document.querySelector("[data-action=clear]");
      // if action !== 'clear' display "CE" on clear Button
      clearButton.textContent = "CE";
    }

    if (action === "clear") {
      // If clear is clicked 
        // dispay AC on clear Button
      key.textContent = "AC";
        // set first value into empty string
      calculator.dataset.firstValue = "";
        // set Modvalue into empty string 
      calculator.dataset.modValue = "";
        // set Operator into empty string
      calculator.dataset.operator = "";
        // set Previous key type into empty string
      calculator.dataset.previousKeyType = "";

      // set Dispay to 0
      display.textContent = 0;

      // Set Previouse key type into Decimal by using data-action attribute . To Keep track what is previous key type
      calculator.dataset.previousKeyType = "clear";
    }

    // Calculate Key
    if (action === "calculate") {
      // secondValue var is displayNum 
      let secondValue = displayedNum;
      // First value is display num before already set with data-action when clicked operator key
      let firstValue = calculator.dataset.firstValue;
      // Operator is operator already set when clicked operator key 
      const operator = calculator.dataset.operator;

      if (firstValue) {
        // If there is first value 
        if (previousKeyType === "calculate") {
          // If previous key is Calculate 
            // Set first value to displayNum
          firstValue = displayedNum;
            // Set second value to modValue . So this second value is displayNumb before 
          secondValue = calculator.dataset.modValue;
        }
        // display calculated Number 
        display.textContent = calculateFunc(firstValue, operator, secondValue);
      }

      // Create modValue and set it to second Value . So modValue is display Num . To keep track second value
      calculator.dataset.modValue = secondValue;
      // Set Previouse key type into Calculate by using data-action attribute . To Keep track what is previous key type
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});
