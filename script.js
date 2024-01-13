/**
 * 
 * @param {*} firstNum 
 * @param {*} secondNum 
 * @returns firstNum x secondNUm
 * 
 * This function calculates and returns the sum of two bit strings as a bit string.
 */
function add(a, b) {
  a = BigInt(parseInt(a, 2));
  b = BigInt(parseInt(b, 2));
  result = a+b;
  let output = result.toString(2);

  return output;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns a * b
 * 
 * This function calculates and returns the sum of two bit strings as a bit string
 */
function multiply(a, b) {
    a = BigInt(parseInt(a, 2));
    b = BigInt(parseInt(b, 2));
    result = a*b;
    let output = result.toString(2);
  
    return output;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns a - b
 * 
 * This function calculates and returns the difference of two bit strings as a bit string.
 * Adds a '-' at the start of the result if it is negative
 */
function subtract(a, b) {
  a = BigInt(parseInt(a, 2));
  b = BigInt(parseInt(b, 2));
  result = a-b;
  let output = result.toString(2);

  return output;
}

function divide(a,b){
  a = BigInt(parseInt(a, 2));
  b = BigInt(parseInt(b, 2));
  result = a/b;
  let output = result.toString(2);

  return output;
}
  

function isValidInput(str){
  for (let i = 0; i < str.length; i++){
    if (str[i] !== '1' && str[i] !== '0') return false;
  }
  return true;
}

function evaluate(operation){
  const firstOperandForm = document.querySelector('#first-operand');
  const secondOperandForm = document.querySelector('#second-operand');

  const firstOperand = firstOperandForm.value;
  const secondOperand = secondOperandForm.value;
  
  let output = 0;
  if (isValidInput(firstOperand) && isValidInput(secondOperand)){
    switch(operation){
      case 'add':
        output = add(firstOperand,secondOperand);
        break;
      case 'multiply':
        output = multiply(firstOperand,secondOperand);
        break;
      case 'subtract':
        output = subtract(firstOperand,secondOperand);
        break;
      case 'divide':
        output  = divide(firstOperand,secondOperand);
        break;
    }
    displayOutput(output);
  } else{
    alert('Invalid inputs. Inputs must be bit strings');
  }
}

function displayOutput(output){
  const resultText = document.querySelector('#result-text');
  resultText.textContent = output;
}

const operatorButtons = document.querySelectorAll('button');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operation = button.getAttribute('id');
    evaluate(operation);
  })
});


  
  
  