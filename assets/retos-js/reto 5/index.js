/* const validarFormulario = (nombre, email, mensaje) => {
    return nombre && email && mensaje;
}

function enviarFormulario(nombre, email, mensaje) {
    if (validarFormulario(nombre, email, mensaje)) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor completa todos los campos.");
    }
} */

const nombre = 'Pedro';
const email = 'pedro.21@gmail.com';
const mensaje = 'Hola, Soy Pedro';

// enviarFormulario(nombre, email, mensaje);

function enviarMensaje(enExito, enError) {
    if (nombre && email && mensaje){ 
    enExito();
    } else {
        enError();
    }
}
enviarMensaje(
    () => console.log('¡Formulario enviado con éxito!'),
    () => console.log('Por favor llenar todos los campos')
);


document.addEventListener('DOMContentLoaded', function() {
    const userField = document.getElementById('user');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const userError = document.getElementById('userError');
    const passwordError = document.getElementById('passwordError');
  
    function validarCampos() {
      if (userField.value.trim() !== '') {
        userError.style.display = 'none'; // Oculta el mensaje de error
      } else {
        userError.style.display = 'block'; // Muestra el mensaje de error
      }
  
      if (passwordField.value.trim() !== '') {
        passwordError.style.display = 'none'; // Oculta el mensaje de error
      } else {
        passwordError.style.display = 'block'; // Muestra el mensaje de error
      }
  
      if (userField.value.trim() !== '' && passwordField.value.trim() !== '') {
        loginButton.disabled = false; // Habilita el botón si ambos campos están llenos
      } else {
        loginButton.disabled = true; // Deshabilita el botón si algún campo está vacío
      }
    }
  
    // Escucha los eventos de entrada (input) en los campos
    userField.addEventListener('input', validarCampos);
    passwordField.addEventListener('input', validarCampos);
  
    // Inicialmente, deshabilita el botón de inicio de sesión y oculta los mensajes de error
    loginButton.disabled = true;
    userError.style.display = 'none';
    passwordError.style.display = 'none';
  });
  