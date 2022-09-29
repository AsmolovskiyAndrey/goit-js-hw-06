function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function amount() {
  return finallyAmount = inputRef.value; //! присвоил значение в finallyAmount из input и вернул
}

function createOneBox(size) {
  const newBox = document.createElement("div");
  newBox.style.backgroundColor = getRandomHexColor();
  newBox.style.width = `${size}px`;
  newBox.style.height = `${size}px`;

  newBoxes.append(newBox);
}

function createBoxes(amount) {
  for (let i = 1; i <= finallyAmount; i++) {
    createOneBox(firstSize);
    firstSize += 10;
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = '';
  firstSize = 30; //! установил значение к изначальным
  inputRef.value = null; //! обнулил значение в input
}

let finallyAmount = 0;
let firstSize = 30;
const inputRef = document.querySelector('input');
const createRef = document.querySelector('button[data-create]');
const destroyRef = document.querySelector('button[data-destroy]');
const newBoxes = document.querySelector('#boxes');
const afterControls = document.querySelector('#controls');

inputRef.addEventListener('blur', amount);  //! событие потеря фокуса в инпуте

createRef.addEventListener('click', createBoxes);

destroyRef.addEventListener('click', destroyBoxes);

