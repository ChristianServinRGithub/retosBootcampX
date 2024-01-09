const listComponent = document.getElementById("list-component");

const newComponent = document.createElement("div");

newComponent.innerHTML = `
<h3>Componente 1</h3>
<p>Aquí va la descripción</p>
`;

listComponent.appendChild(newComponent);

const firstComponet = listComponent.firstChild;

if (firstComponet) {
  firstComponet.innerHTML = `
    <h3>Componente editado</h3>
    <p>Este es el nuevo contenido del componente</p>
`;
};

const newComponent2 = document.createElement('div');

newComponent2.innerHTML = `
<h3>Componente 3</h3>
<p>Nuevo componente ninja</p>
`;

listComponent.insertAdjacentElement('afterend', newComponent2);

newComponent2.classList.add('ninja');





function editarTitulo() {
  //se asigno h1 a la variable titulo
  const titulo = document.querySelector('h1');

  titulo.textContent = 'Nuevo Titulo';
}

// editarTitulo();

function tituloOriginal() {
   //se asigno h1 a la variable titulo
   const titulo = document.querySelector('h1');

  if (titulo === 'Nuevo Titulo') {
    return titulo.textContent = 'Página de tarjetas añadibles'
  }
}

tituloOriginal();