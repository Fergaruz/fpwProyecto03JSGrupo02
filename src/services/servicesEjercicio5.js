export const stock = (carrito) => {
  console.log(carrito.filter((producto) =>
    producto.enStock)
  );
}