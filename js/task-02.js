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
  const listItems = document.createElement("li")
  listItems.textContent = ingredient;
  listItems.classList.add('item')
  ulEl.append(listItems);
  return listItems;
})

console.log(listOfIngrediens);



  

