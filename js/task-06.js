const inputEl = document.querySelector("#validation-input");
const attributOfEl = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
    if (inputEl.value.length != attributOfEl) {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    } else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
});


