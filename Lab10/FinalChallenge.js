var firstNumber = document.getElementById("firstValue");
var secondNumber = document.getElementById("secondValue");

function sum(){
  var math = Number(firstNumber.value) + Number(secondNumber.value);
  document.getElementById("finalAnswer").innerHTML = math;
}
function substract(){
  var math = Number(firstNumber.value) - Number(secondNumber.value);
  document.getElementById("finalAnswer").innerHTML = math;
}
function product(){
  var math = Number(firstNumber.value) * Number(secondNumber.value);
  document.getElementById("finalAnswer").innerHTML = math;
}
function quotient(){
  var math = Number(firstNumber.value) / Number(secondNumber.value);
  document.getElementById("finalAnswer").innerHTML = math;
}
