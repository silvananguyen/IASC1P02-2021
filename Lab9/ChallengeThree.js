function newValue(){
  var firstInput = document.getElementById("firstInput");
  console.log(firstInput);
  var secondInput = document.getElementById("secondInput");
  console.log(secondInput);
  var addition = Number(firstInput.value) + Number(secondInput.value);
  console.log(addition);
  document.getElementById("outputValue").innerHTML = addition;
}
