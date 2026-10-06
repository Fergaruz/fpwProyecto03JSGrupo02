const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputLibreta = document.querySelector("#libreta");
const boton = document.querySelector("#btnMostrar");
const mensajeError = document.querySelector("#mensajeError");
const tabla = document.querySelector("#tablaDatos");

// Arreglo donde se guardan todos los estudiantes
const estudiantes = [];

boton.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const libreta = inputLibreta.value.trim();

  // Validaciones (las funciones están en servicesEjercicio1.js)
  if (!validarTexto(nombre)) {
    mensajeError.textContent = "El nombre es obligatorio y solo puede tener letras y espacios.";
    return;
  }
  if (!validarTexto(apellido)) {
    mensajeError.textContent = "El apellido es obligatorio y solo puede tener letras y espacios.";
    return;
  }
  if (!validarLibreta(libreta)) {
    mensajeError.textContent = "La libreta es obligatoria y solo puede tener letras y números.";
    return;
  }
  if (libretaRepetida(estudiantes, libreta)) {
    mensajeError.textContent = "Ya existe un estudiante con esa libreta universitaria.";
    return;
  }

  mensajeError.textContent = "";

  // Guardar el nuevo estudiante en el arreglo
  estudiantes.push({ nombre: nombre, apellido: apellido, libreta: libreta });

  // Tabla que funciona como lista: una fila por estudiante, generada con map()
  const filas = estudiantes.map(function (estudiante) {
    return "<tr><td>" + estudiante.nombre + "</td><td>" + estudiante.apellido +
           "</td><td>" + estudiante.libreta + "</td></tr>";
  });
  tabla.innerHTML =
    "<tr><th>Nombre</th><th>Apellido</th><th>Libreta Universitaria</th></tr>" +
    filas.join("");

  // Limpiar los inputs para cargar el siguiente
  inputNombre.value = "";
  inputApellido.value = "";
  inputLibreta.value = "";
});