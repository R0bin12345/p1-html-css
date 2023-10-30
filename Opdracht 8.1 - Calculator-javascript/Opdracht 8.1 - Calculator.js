document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("minusBtn").addEventListener("click", minus);
document.getElementById("multiplyBtn").addEventListener("click", multiply);
document.getElementById("divideBtn").addEventListener("click", divide);

function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").textContent = result;
}

function minus() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 - num2;
  document.getElementById("result").textContent = result;
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").textContent = result;
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (num2 === 0) {
    document.getElementById("result").textContent = "Kan niet delen door 0";
  } else {
    var result = num1 / num2;
    document.getElementById("result").textContent = result;
  }
}
