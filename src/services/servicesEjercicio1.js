// Funciones de validación del ejercicio 1

// Devuelve true si el caracter es una letra (incluye tildes y ñ)
function esLetra(caracter) {
  return caracter.toLowerCase() !== caracter.toUpperCase();
}

// Devuelve true si el caracter es un número del 0 al 9
function esNumero(caracter) {
  return "0123456789".includes(caracter);
}

// Nombre y apellido: solo letras y espacios, y no vacío
function validarTexto(texto) {
  if (texto.trim() === "") {
    return false;
  }
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    if (!esLetra(caracter) && caracter !== " ") {
      return false;
    }
  }
  return true;
}

// Libreta: solo letras y números, y no vacía
function validarLibreta(texto) {
  if (texto.trim() === "") {
    return false;
  }
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    if (!esLetra(caracter) && !esNumero(caracter)) {
      return false;
    }
  }
  return true;
}

// Devuelve true si ya existe un estudiante con esa libreta
// La libreta es el identificador único (se compara sin importar mayúsculas)
function libretaRepetida(listaEstudiantes, libreta) {
  const repetidos = listaEstudiantes.filter(function (estudiante) {
    return estudiante.libreta.toUpperCase() === libreta.toUpperCase();
  });
  return repetidos.length > 0;
}