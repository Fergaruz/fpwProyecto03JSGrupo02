const boton = document.querySelector("#btnColor");

const colores = [
    "#ff00aa", // magenta
    "#00ff66", // verde
    "#ffff00", // amarillo
    "#000000"  // negro
];

boton.addEventListener("click", function () {

    const posicionAleatoria =
        Math.floor(Math.random() * colores.length);

    const colorElegido = colores[posicionAleatoria];

    document.body.style.backgroundColor = colorElegido;

    console.log("El color de fondo cambió a: " + colorElegido);

});