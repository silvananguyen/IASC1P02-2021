function newValue(){
  var firstInput = Number(document.getElementById("firstInput").value);
  console.log(firstInput);
  var secondInput = Number(document.getElementById("secondInput").value);
  console.log(secondInput);
  var addition = firstInput + secondInput;
  console.log(addition);
  document.getElementById("outputValue").innerHTML = addition;
}
