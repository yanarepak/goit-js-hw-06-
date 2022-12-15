const buttonEl = document.querySelector(".change-color");
const bgColorEl = document.querySelector(".color");
const pageBodyEl = document.querySelector("body");

const getChangeColor = function () {
  let color = getRandomHexColor();
  bgColorEl.textContent = color;
  pageBodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", getChangeColor)