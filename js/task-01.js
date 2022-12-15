const lengthItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${lengthItems.length}`);

const ulList = document.querySelector("#categories")
const itemList = ulList.children

for (const element of itemList) {
    console.log("Categorie:" + element.querySelector("h2").textContent);
    console.log("Elements:" + element.querySelector("ul").children.length);
}