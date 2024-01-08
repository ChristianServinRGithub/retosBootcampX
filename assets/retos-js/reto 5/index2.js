const user = {
    nombre: 'Juan',
    email: 'Juan@exple.com',
    mensaje: 'Hola, Soy Juan'
};

const user2 = {
    nombre: 'Dominic',
    email: '',
    mensaje: 'Dominic D\' Coco'
}

//forma uno utilizando asignacion de función a una constante y funciones flecha.
/* const validarFormulario = (Object) => {
    return Object.nombre && Object.email && Object.mensaje;
};

function enviarMensaje(enExito, enError) {
    if (validarFormulario(user)) {
        enExito();
    } else {
        enError()
    }
};

enviarMensaje(
    () => console.log('¡Formulario enviado con éxito!'),
    () => console.log('Por favor completa todos los campos.')
    );
 */

    // resulto con función tradicional validando campos

function enviarMensaje(user) {
    if (user.nombre && user.email && user.mensaje) {
        console.log('¡Formulario enviado!');;
    } else {
        console.log('Completa los campos');
    }
}
console.log(user);
enviarMensaje(user)

console.log(user2);
enviarMensaje(user2)

