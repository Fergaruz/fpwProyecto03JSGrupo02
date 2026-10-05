const boton = document.querySelector("#btnColor");
const frase = document.querySelector("#frase");

const colores = [
    "#ff00aa", // magenta
    "#00ff66", // verde
    "#ffff00", // amarillo
    "#000000"  // negro
];

const frases = [
    "Llegué para robarme las miradas.",           // magenta
    "Hasta los píxeles necesitan respirar.",     // verde
    "El sol pidió prestada esta pantalla.",      // amarillo
    "Apagamos las luces. Encendemos el estilo."  // negro
];

boton.addEventListener("click", function () {

    const posicionAleatoria =
        Math.floor(Math.random() * colores.length);

    const colorElegido = colores[posicionAleatoria];

    document.body.style.backgroundColor = colorElegido;

    frase.textContent = frases[posicionAleatoria];

    console.log("El color de fondo cambió a: " + colorElegido);
});