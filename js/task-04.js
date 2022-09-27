const decrementEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const makeDecrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
const makeIncrement = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementEl.addEventListener('click', makeDecrement);
incrementEl.addEventListener('click', makeIncrement);