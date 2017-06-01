$(document).ready(function () {

$("form").submit(function() {

  var number1 = parseInt($("input#number1").val());
  var number2 = parseInt($("input#number2").val());
  var operator = $("input:radio[name=operator]:checked").val();

  if (operator === "add") {
  var add = function(number1, number2) {
  return number1 + number2;
  }
  alert(add(number1,number2));
} else if (operator === "subtract"){
  var subtract = function(number1, number2) {
    return number1 - number2;
  }
  alert(subtract(number1,number2));
} else if (operator === "multiply"){
  var multiply = function(number1, number2) {
    return number1 * number2;
  }
  alert(multiply(number1,number2));
} else if (operator === "divide"){
  var divide = function(number1, number2) {
    return number1 / number2;
  }
  alert(divide(number1,number2));
}

  event.preventDefault();
});
});
