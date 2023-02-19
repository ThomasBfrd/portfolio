const input = document.querySelector('input[name="email"]');

input.addEventListener('invalid', function (event) {
if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Votre adresse doit comporter un @');
}
})

input.addEventListener('change', function (event) {
event.target.setCustomValidity('');
})