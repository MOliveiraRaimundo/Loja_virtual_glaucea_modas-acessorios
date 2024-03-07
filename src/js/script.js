const form = document.querySelector("#form");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const textArea = document.querySelector("#message");

const msgFeedback = document.querySelector(".feedback");

const btnMenu = document.querySelector(".menu_btn");
const navBar = document.querySelector(".navbar");

const loginForm = document.querySelector("#form-login");
const inputNomeLogin = document.querySelector(".nome");
const inputSenhaLogin = document.querySelector(".senha");
const btnLogin = document.querySelector("#login-btn");

function validarEmail() {
    const inputNameValue = inputName.value;
    const inputEmailValue = inputEmail.value;
    const textAreaValue = textArea.value;


    if (!inputName.value) return;
    if (!isEmailValid(inputEmail.value)) return;
    if (!textArea.value) return;

    msgFeedback.innerHTML = `<p>Agradecemos o seu contato ${inputNameValue}!</p>`;

    inputName.value = "";
    inputEmail.value = "";
    textArea.value = "";
}

function isEmailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}

function fazerLogin(){ 
    const inputNomeValue =  inputNomeLogin.value;
    const inputSenhaValue =  inputSenhaLogin.value;

    inputNomeLogin.value = "";
    inputSenhaLogin.value = "";
}

btnMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarEmail();
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fazerLogin();
    validarEmail();
});