const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    if (inputEl.dataset.length <= event.currentTarget.value.length) {
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.add("invalid");        
    }
}