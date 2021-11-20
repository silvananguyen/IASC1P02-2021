var elementOne = document.getElementById("firstValue");
var elementTwo = document.getElementById("secondValue");

function sum(){
  var math = Number(elementOne.value) + Number(elementTwo.value);
  document.getElementById("finalAnswer").innerHTML = math;
}

function difference(){
  var math = Number(elementOne.value) - Number(elementTwo.value);
  document.getElementById("finalAnswer").innerHTML = math;
}

function product(){
  var math = Number(elementOne.value) * Number(elementTwo.value);
  document.getElementById("finalAnswer").innerHTML = math;
}

function quotient(){
  var math = Number(elementOne.value) / Number(elementTwo.value);
  document.getElementById("finalAnswer").innerHTML = math;
}
