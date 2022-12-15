const loginFormEl = document.querySelector(".login-form")

const getEventSubmit = function (event) {
    event.preventDefault();

    const { elements: { email, password }, } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Заповніть усі поля!")
    }

    event.currentTarget.reset()
}

loginFormEl.addEventListener("submit", getEventSubmit)
