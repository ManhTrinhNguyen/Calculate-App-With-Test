const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator-key')
const display = document.querySelector('.calculator_display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) { 
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    
    const calculate = (n1, operator, n2) => {
      let result = ''
      
      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }
      
      return result
    };
    
    let previousKeyType = calculator.dataset.previousKeyType
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
   
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
    };

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
        const calValue = calculate(firstValue, operator, secondValue)
        display.textContent = calValue 
        calculator.dataset.firstValue = calValue
      } else {
        calculator.dataset.firstValue = displayedNum
      }

      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.operator = action
    };

    if (action === 'decimal') {
      if (!display.textContent.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = '0.'
      } 
      calculator.dataset.previousKeyType = 'decimal'
    };

    if (action !== 'clear') {
      const clearButton = document.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE'
    };

    if (action === 'clear') {
      key.textContent = 'AC'
      calculator.dataset.firstValue = ''
      calculator.dataset.modValue = ''
      calculator.dataset.operator = ''
      calculator.dataset.previousKeyType = ''

      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
    }

    if (action === 'calculate') {
      let secondValue = displayedNum
      let firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      
      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum
          secondValue = calculator.dataset.modValue
        }

      display.textContent = calculate(firstValue, operator, secondValue)
      }

      calculator.dataset.modValue = secondValue
      calculator.dataset.previousKeyType = 'calculate'
    };

    

  }

})

