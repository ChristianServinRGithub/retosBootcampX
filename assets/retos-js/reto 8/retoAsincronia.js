async function obtenerDatosDeAPI() {
  try {
    console.log("Iniciando solicitud a la API....");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("La respuesta de la red no fue concretada");
    }
    const data = await response.json();
    console.log("Datos obtenidos de la API:", data);
    return data;
  } catch (error) {
    console.log(`Hubo problema con los datos ${error}`);
    return null;
  }
}

async function mostrarDatos() {
  const tiempoDeEspera = 3000;
  const datos = await obtenerDatosDeAPI();

  if (datos) {
    console.log(
      `Esperando ${tiempoDeEspera / 1000} segundos para mostrar los datos...`
    );
  }
  setTimeout(() => {
    console.log("Datos después del tiempo de espera:", datos);
  }, tiempoDeEspera);
}

mostrarDatos();

/* 
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(json => {
        const datosObtenidos = json;
        console.log(`Datos obtenidos de la API:`, datosObtenidos);
    })
    .catch(error => console.log(`Error: ${error}`))
    .finally(()=> console.log('Proceso Terminado'));

console.log('Iniciando solicitud a la API'); */
