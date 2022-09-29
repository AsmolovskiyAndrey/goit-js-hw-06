function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = bodyRef.style.backgroundColor;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', changeBackgroundColor);


