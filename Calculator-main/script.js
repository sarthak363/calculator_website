var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;
function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(display.textContent.trim());

      display.textContent = "";
    } else if (value == "C") {
      display.textContent = "";
    } 
      else if (value == "=") {
      operand2 = parseFloat(display.textContent);
      var result = eval(operand1 + " " + operator + " " + operand2);
      if (result) {
        display.textContent = result;

        operand1 = result;
        operator = null;
        operand2 = null;
      }
    } else {
      display.textContent += value;
    }
  });
}