 export function validarCorreo(text) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(text)) {
        console.log('Correo Valido');
    } else {
        console.log('Correo invalido, favor de corregir');
    }
};

validarCorreo('User123123@go.mx');

