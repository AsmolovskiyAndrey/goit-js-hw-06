const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//! ========== жаль что по условию так сделать нельзя - значительно чище код (ОКАЗАЛОСЬ ЧТО МОЖНО !!!)
const allIngridients = document.querySelector('#ingredients');

const ingridientArray = [];

for (const ingredient of ingredients) {
  const oneIngredient = document.createElement('li');
  oneIngredient.textContent = ingredient;
  oneIngredient.classList.add('item')
  ingridientArray.push(oneIngredient);
}

allIngridients.append(...ingridientArray);
//=============================================================================
// const allIngridients = document.querySelector('#ingredients');

// const oneIngredient = document.createElement('li');
// oneIngredient.textContent = ingredients[0];
// oneIngredient.classList.add('item')

// const twoIngredient = document.createElement('li');
// twoIngredient.textContent = ingredients[1];
// twoIngredient.classList.add('item')

// const threeIngredient = document.createElement('li');
// threeIngredient.textContent = ingredients[2];
// threeIngredient.classList.add('item')

// const fourIngredient = document.createElement('li');
// fourIngredient.textContent = ingredients[3];
// fourIngredient.classList.add('item')

// const fiveIngredient = document.createElement('li');
// fiveIngredient.textContent = ingredients[4];
// fiveIngredient.classList.add('item')

// const sixIngredient = document.createElement('li');
// sixIngredient.textContent = ingredients[5];
// sixIngredient.classList.add('item')

// allIngridients.append(oneIngredient, twoIngredient, threeIngredient,
// fourIngredient, fiveIngredient, sixIngredient);