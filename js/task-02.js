const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients")

const listOfIngrediens = ingredients.map(ingredient => {
  const listItems = document.createElement("li");
  listItems.classList.add('item')
  listItems.textContent = ingredient;
  return listItems;
})

console.log(listOfIngrediens);

ulEl.append(...listOfIngrediens);



  

