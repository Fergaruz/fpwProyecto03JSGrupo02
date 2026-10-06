// Productos del kiosco (precios sin IVA)
const productos = [
  { nombre: "Coca", precio: 1000 },
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 1200 }
];

// Recibe un arreglo de productos y devuelve uno nuevo con el precio final (IVA 21%)
// El arreglo original no se modifica
function calcularPreciosConIVA(listaProductos) {
  const productosConIVA = listaProductos.map(function (producto) {
    return {
      nombre: producto.nombre,
      precioFinal: producto.precio * 1.21
    };
  });
  return productosConIVA;
}