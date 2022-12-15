const inputRange = document.getElementById("font-size-control");
const inputText = document.getElementById("text");

 function changingSize() {
    inputText.style["font-size"] = inputRange["value"] + "px";
}

inputRange.addEventListener("input", changingSize);
