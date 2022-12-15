let counterValue = 0;

const addBtn = document.querySelector('[data-action="increment"]')
const removeBtn = document.querySelector('[data-action="decrement"]')
const value = document.getElementById("value")

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

addBtn.addEventListener("click", increment);
removeBtn.addEventListener("click", decrement);
