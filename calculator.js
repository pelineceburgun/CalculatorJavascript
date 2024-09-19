class Calculator {
    static calculate(previousNumber, currentNumber, operator) {
      let result;
  
      switch (operator) {
        case "+":
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case "-":
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case "*":
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case "/":
          if (parseFloat(currentNumber) === 0) {
            throw new Error("Cannot divide by zero!");
          }
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        default:
          throw new Error("Invalid operator!");
      }
  
      return result.toString();
    }
}
  