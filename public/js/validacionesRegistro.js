
const formulario = document.getElementById('formularioRegistro');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');


formulario.addEventListener('submit', function (evento) {

    evento.preventDefault();

    const emailValor = emailInput.value.trim();
    const passwordValor = passwordInput.value;
    const password2Valor = password2Input.value;

    console.log(passwordValor + " " + passwordValor.length);
    console.log(password2Valor + " " + password2Valor.length);

    if (passwordValor.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (passwordValor !== password2Valor) {
        alert("Las contraseñas no coinciden.");
    } else {
        formulario.submit();
    }
});