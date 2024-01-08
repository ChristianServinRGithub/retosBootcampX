    const modulo = (function () {
    const usuarios = [];

    function agregarUsuario(nombre) {
        usuarios.push({nombre});
        console.log(`Usuario '${nombre}' agregado.`);
    }

    function mostrarUsuarios() {
        console.log("Lista de usuarios:");
        usuarios.forEach((usuario) => console.log(usuario.nombre));
    }
    return {
        agregar: agregarUsuario,
        mostrar: mostrarUsuarios,
    };
    })();

    export default modulo;

modulo.agregar("Juan");
modulo.agregar('María');
modulo.mostrar();


