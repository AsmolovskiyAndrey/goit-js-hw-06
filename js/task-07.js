const controlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

controlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}