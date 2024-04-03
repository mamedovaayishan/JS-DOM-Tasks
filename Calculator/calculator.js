// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
//   }

//   function clearDisplay() {
//     document.getElementById('display').value = '';
//   }

//   function deleteLast() {
//     var expression = document.getElementById('display').value;
//     document.getElementById('display').value = expression.slice(0, -1);
//   }

//   function calculate() {
//     var expression = document.getElementById('display').value;
//     var result = eval(expression);
//     document.getElementById('display').value = result;
//   }


function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  var numbers = expression.split(/\+|\-|\*|\//);
  var operators = expression.replace(/[0-9]|\./g, "").split("");
  var result = parseFloat(numbers[0]);

  for (var i = 0; i < operators.length; i++) {
    var num = parseFloat(numbers[i + 1]);
    if (operators[i] === "+") result += num;
    else if (operators[i] === "-") result -= num;
    else if (operators[i] === "*") result *= num;
    else if (operators[i] === "/") result /= num;
  }

  document.getElementById('display').value = result;
}