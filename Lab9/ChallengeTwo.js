var dateToday = new Date();

var yearToday = dateToday.getFullYear();

var yourAge = prompt("What is your age?");

document.getElementById("yearHere").innerHTML = yearToday - yourAge;
