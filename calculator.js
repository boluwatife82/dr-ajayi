const operators = ["+", "x", "-", "÷"];

function handleButtonClick(e) {
  const input = document.getElementById("calculator-input");
  input.scrollLeft = input.scrollWidth;

  const buttonText = e.target.innerText;
  let inputText = input.value;
  let lastChar = inputText[inputText.length - 1];

  if (inputText === "Error") {
    input.value = "";
    inputText = "";
    lastChar = "";
  }

  if (buttonText === "=") {
    try {
      inputText = inputText.replace(/÷/g, "/").replace(/x/g, "*");
      const result = eval(inputText);
      input.value = Number(result).toLocaleString();
    } catch {
      input.value = "Error";
    }
  } else if (buttonText === "C") {
    input.value = "";
  } else if (buttonText === "DE") {
    document.getElementById("calculator-input").value = inputText.slice(0, -1);
  } else if (buttonText === "%") {
    try {
      const result = eval(inputText);
      input.value = result / 100;
    } catch {
      input.value = "Error";
    }
  } else if (operators.includes(buttonText)) {
    if (
      inputText.length == 0 ||
      lastChar === "." ||
      operators.includes(lastChar)
    ) {
      return;
    }
    input.value += buttonText;
  } else {
    input.value += buttonText;
  }
}

// this is how i attach event listeners ONCE when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});
