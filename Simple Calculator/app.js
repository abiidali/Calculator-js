                

function setNumber(num){
  var input = document.querySelector('.display');
  var operators = ["+", "-", "*", "/" , "%"];
  var lastChar = input.value.slice(0,-1);
if (operators.includes(lastChar) && operators.includes(num)) {
  return;
}
  input.value += num
}

function result() {
  var inputValue = document.querySelector('.display');
  try {
    var output = eval(inputValue.value);
    if (output === Infinity || output === -Infinity || isNaN(output)) {
      throw new Error("Error");
    }
    inputValue.value = output;
  } catch (err) {
    inputValue.value = "Error";
  }
}
function clearScreen() {
  var inputValue = document.querySelector('.display');
  inputValue.value = " ";
}

function delScreen(){
  var inputValue = document.querySelector('.display');
  if (inputValue.value !== "Error") {
      inputValue.value = inputValue.value.slice(0,-1);
    }
}