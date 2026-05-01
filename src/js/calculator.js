const refs = {
  calculator: document.querySelector('.calculator'),
  number1: document.querySelector('.number-one'),
    plus: document.querySelector('#plus'),
    multi: document.querySelector('#multi'),
    minus: document.querySelector('#minus'),
  divid: document.querySelector('#divid'),
    number2: document.querySelector('.number-two'),
  equals: document.querySelector('#equals'),
  result: document.querySelector('.calculator-result'),
};
let operation = null 

refs.plus.addEventListener("click", () => {
    operation =  (a, b) => a + b  
})
refs.multi.addEventListener('click', () => {
    operation = (a, b) => a * b;
});
refs.minus.addEventListener('click', () => {
  operation = (a, b) => a - b;
});
refs.divid.addEventListener('click', () => {
    operation = (a, b) => {
        if (b === 0) {
            alert("Cannot divide by zero")
            return null
        }
       return a / b 
  };
});

refs.equals.addEventListener("click", () => {
    const firstNumber = parseInt(refs.number1.value)
    const secondNumber = parseInt(refs.number2.value)

    if (operation) {
        const resultValue = operation(firstNumber, secondNumber)
        refs.result.value = resultValue !== null? resultValue:" "
    } else {
        alert('Choose correct operation first!')
    }
})

// function calculator (number1, number2 ){
//   switch (refs.operator) {
//     case '+' (refs.plus):
//       return refs.number1 + refs.number2;
//     case '-':
//       return refs.number1 - refs.number2;
//     case '*':
//       return refs.number1 * refs.number2;
//     case '/':
//       return b !== 0 ? refs.number1 / refs.number2 : 'Cannot divide by zero';
//     default:
//       return 'Invalid operator';
//   }
// }
