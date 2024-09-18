let display = document.querySelector("#display");
//todisplay
function appendNumber(num) {
  display.textContent == 0
    ? (display.textContent = num)
    : (display.textContent += num);
}
function clearScreen() {
  display.textContent = "0";
}
function deleteNumber() {
  let data = display.textContent;
  let result;
  if (data != "0") {
    result = data.slice(0, -1);
    if (result == "") {
      result = "0";
    }
    display.textContent = result;
  }
}
function calculation() {
  let operation = display.textContent;
  try {
    let result = eval(operation);
    display.textContent = result;
  } catch (err) {
    display.textContent = "invalid";
  }
}