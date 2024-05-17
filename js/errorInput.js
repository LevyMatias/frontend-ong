export const requiredFields = document.querySelectorAll('.form-control');
const spans = document.querySelectorAll('.mb-3 .span__required');

function setErrorInput(index, text = 'O campo está vazio!') {
    const field = requiredFields[index];
    const span = spans[index];

    field.style.borderBottom = '2px solid red';
    field.classList.remove('success');
    span.classList.add('visible');
    span.textContent = field.value === '' ? 'O campo está vazio!' : text;
}

function removeErrorInput(index) {
    const field = requiredFields[index];
    const span = spans[index];

    field.style.borderBottom = '2px solid green';
    field.classList.remove('error');
    span.classList.remove('visible');
}

export { setErrorInput, removeErrorInput };
