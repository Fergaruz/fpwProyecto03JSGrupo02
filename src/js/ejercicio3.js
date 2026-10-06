const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", function () {
  // productos -> map() -> productosConIVA -> mostrar resultado
  const productosConIVA = calcularPreciosConIVA(productos);

  resultado.textContent = JSON.stringify(productosConIVA, null, 2);
});