const input = document.querySelector("input");
const display = document.querySelector(".button1");
const reset = document.querySelector(".button2");
const fibDisplay = document.querySelector("h3");
let result = [0, 1];
let fib;
let inputValue;

function displayResult(){
  fibDisplay.textContent = inputValue ? (`The fibonacci of ${inputValue} is [ ${result.join(', ')} ]`) : 'Input a number'
}

function displayFibonacci(num){
  for(let i=2; i<=num; i++){
    fib = result[i-1] + result[i-2];
    result.push(fib)
  }
  return result
}


input.addEventListener("change", function() {
  inputValue = input.value;
  return inputValue
})


display.addEventListener("click", function() {
  return (
    displayFibonacci(inputValue),
    displayResult()
    );
})

reset.addEventListener("click", function() {
  input.value = null,
  fibDisplay.textContent = "Fibonacci of a given number",
  result = [0, 1]
  return (inputValue, result);
})
