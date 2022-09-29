const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //*не будет перезагрузки страницы при отправкe формы

    const formElements = event.currentTarget.elements; //*путь к данным формы

    const mail = formElements.email.value;  //* полный путь к значению почты
    const password = formElements.password.value; //* полный путь к значению пароля

    const formData = {  //* создал объект в который положил данные с формы
        mail,
        password,
    };

    if (mail === "" || password === "") {
    return alert("Please fill in all the fields!");
    }

    console.log(formData); //*например {mail: 'asd@qwe.poi', password: '123eqw'}

    event.currentTarget.reset();
}


