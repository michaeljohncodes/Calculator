const display = document.getElementById("display");

function showOnScreen(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function backSpace() {
  let current = display.value;
  display.value = current.slice(0,-1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
