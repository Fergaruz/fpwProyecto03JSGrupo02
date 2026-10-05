export const stock = (carrito) => {
    return (carrito.filter((p) => p.enStock));
}

export const precios = (productosStock) => {
    return productosStock.map((p) => p.precio);
}

export const suma = (precios) => {
    return precios.reduce(nuevaFuncion,0);
}
 
const nuevaFuncion = (acumulador,p) => {
    return acumulador = acumulador + p;
}
