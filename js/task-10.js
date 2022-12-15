const refs = {
  controlsInput: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementAdd = [];

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elementAdd.push(divEl);
  }
  refs.boxes.append(...elementAdd);
};

const getInputValue = () => {
  const amount = refs.controlsInput.value;
  createBoxes(amount);
  refs.controlsInput.value = "";
};
 
refs.createBtn.addEventListener("click", getInputValue);

const destroyBox = () => {
  refs.boxes.innerHTML = "";
};

refs.destroyBtn.addEventListener("click", destroyBox);