export const stock = (carrito) => {
    return (carrito.filter((p) => p.enStock));
}

export const precios = (productosStock) => {
    return productosStock.map((p) => p.precios);
}