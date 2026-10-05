const opciones = [
    {
        color: "#ff00aa",
        frase: "¡Llegué para Robarme las miradas!"
    },
    {
        color: "#00ff66",
        frase: "La esperanza es lo último que se pierde"
    },
    {
        color: "#ffff00",
        frase: "Iluminación y Vitalidad"
    },
    {
        color: "#000000",
        frase: "¡Apagamos las luces, Encendemos el estilo!"
    }
];

function obtenerOpcionAleatoria() {
    const posicionAleatoria =
        Math.floor(Math.random() * opciones.length);

    return opciones[posicionAleatoria];
}