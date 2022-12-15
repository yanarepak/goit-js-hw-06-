const lengthItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${lengthItems.length}`);

for (let i = 0; i < lengthItems.length; i++){
   const categoryTitles = (lengthItems[i].children[0].innerText);
    console.log(`Category: ${categoryTitles}`);
   const categoryEl = categoryTitles.length
    console.log(`Elements: ${categoryEl}`)
}