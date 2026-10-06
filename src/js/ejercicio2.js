const boton = document.querySelector("#btnColor");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function () {

    const opcionElegida = obtenerOpcionAleatoria();

    document.body.style.backgroundColor =
        opcionElegida.color;

    mensaje.textContent =
        opcionElegida.frase;

    console.log(
        "El color de fondo cambió a: " +
        opcionElegida.color
    );
});