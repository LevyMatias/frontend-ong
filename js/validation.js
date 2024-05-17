import { setErrorInput, removeErrorInput, requiredFields } from "./errorInput.js"

const form = document.querySelector('#form');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const urlRegex = new RegExp('^(http|https)://[a-z0-9]+.[a-z]{2,3}');

form.addEventListener('submit', event => {
    event.preventDefault();
    validateForm();
});

const validateField = (index, condition, errorMessage) => {
    condition ? setErrorInput(index, errorMessage) : removeErrorInput(index);
};

const validateName = () => {
    validateField(0, requiredFields[0].value.length < 3, "O nome deve ter no mínimo 3 caracteres");
};

const validateEmail = () => {
    validateField(1, !emailRegex.test(requiredFields[1].value), "Ex: Fulano@email.com");
};

const validateCategoria = () => {
    const length = requiredFields[2].value.length;
    validateField(2, length > 50 || length < 4, "Deve ter no máximo 50 caracteres <br> E no mínimo 4 caracteres");
};

const validateURL = () => {
    validateField(3, !urlRegex.test(requiredFields[3].value), "URL inválida");
};

const validateDescription = () => {
    const length = requiredFields[4].value.length;
    validateField(4, length > 500 || length < 10, `Máximo de 500 caracteres <br> Mínimo de 10 caracteres <br> ${length} caracteres`);
};

const validateForm = () => {
    validateName();
    validateEmail();
    validateCategoria();
    validateURL();
    validateDescription();
};

document.querySelector('#form #nome').addEventListener('input', validateName);
document.querySelector('#form #email').addEventListener('input', validateEmail);
document.querySelector('#form #categoria').addEventListener('input', validateCategoria);
document.querySelector('#form #link').addEventListener('input', validateURL);
document.querySelector('#form #descricao').addEventListener('input', validateDescription);
