const input = document.getElementById("input");
const result = document.getElementById("result");
const main = document.querySelector("main");
const root = document.querySelector(":root");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
];

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.getElementById("equal").addEventListener("click", function () {
  calculate();
});

function calculate() {
  resultInput.value = "Error";
  resultInput.classList.add("error");

  const resultado = eval(input.value);
  result.value = resultado;
  input.value = "";
  resultInput.classList.remove("error");
}

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (ev.key === "Enter") {
    calculate();
    return;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.substring(0, input.value.length - 1);
    return;
  }

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
});

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;

    if (button.innerText == "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(result.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
