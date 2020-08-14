let sum;

let displayEl = document.querySelector("h1 span");
let numEl = document.querySelector("#num");

document.querySelector("#plus").addEventListener("click", plusNum);
document.querySelector("#minus").addEventListener("click", minusNum);

function init() {
  sum = 0;
  render();
}

function render() {
  displayEl.textContent = sum;
  displayEl.style.color = sum < 0 ? "red" : "black";
}

function plusNum() {
  if (numEl.value !== "") {
    let input = parseInt(numEl.value);
    sum += input;
    render();
  }
}

function minusNum() {
  if (numEl.value !== "") {
    let input = parseInt(numEl.value);
    sum -= input;
    render();
  }
}

init();
