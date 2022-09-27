const inputEl = document.querySelector('#name-input');
const textInput = document.querySelector('#name-output');


inputEl.addEventListener("input", (event) => {
    textInput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        textInput.textContent = 'Anonymous';
    }
});