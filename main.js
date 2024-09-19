
const resultPanel = document.querySelector(".resultPanel");
const resultSpan =document.querySelector(".result");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearAllButton = document.querySelector("#clearAll");
const deleteACharButton = document.querySelector("#deleteAChar");

let previousNumber = "";
let currentNumber = "";
let operator = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", getNumber);
  });
  
  
  operatorButtons.forEach((button) => {
    button.addEventListener("click", getOperator);
  });
  
  
  equalsButton.addEventListener("click", calculate);
  
  
  clearAllButton.addEventListener("click", clearAll);
  
  
  deleteACharButton.addEventListener("click", deleteAChar);


function getNumber(event) {
  const number = event.target.value;
  currentNumber += number;
  updateDisplay(currentNumber);
}


function getOperator(event) {
  operator = event.target.value;
  previousNumber = currentNumber;
  currentNumber = "";
  updateDisplay(previousNumber + operator);
}


function calculate() {
  const result = Calculator.calculate(previousNumber, currentNumber, operator);
  updateDisplay(result);
  previousNumber = result;
  currentNumber = "";
  operator = "";
}


function clearAll() {
  previousNumber = "";
  currentNumber = "";
  operator = "";
  updateDisplay("0");
}
function deleteAChar() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay(currentNumber);
}
  

function updateDisplay(value) {
    resultSpan.textContent = value;
}
