import { precios, stock, suma } from "../services/servicesEjercicio5.js";

const carrito = [

  { producto: "Notebook", precio: 800000, enStock: true },

  { producto: "Mouse", precio: 15000, enStock: false },

  { producto: "Teclado", precio: 30000, enStock: true },

  { producto: "Monitor", precio: 200000, enStock: true }

];

const total = document.querySelector("#total");
const detalle = document.querySelector("#detalle");
const boton = document.querySelector("#btnTotal");

console.log(carrito);

boton.addEventListener("click", (evento) => {
  
  evento.preventDefault();
  let total = suma(precios(stock(carrito)));
  console.log(total);
})



