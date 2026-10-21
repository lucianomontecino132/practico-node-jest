/**
 * Devuelve el precio final en centavos.
 * centavos: entero >= 0. porcentaje: número finito entre 0 y 100.
 * Redondea al centavo más cercano con Math.round.
 * Una entrada inválida debe producir TypeError.
 */
function precioFinal(centavos, porcentaje) {
  if (
    typeof centavos !== 'number' ||
    !Number.isInteger(centavos) ||
    centavos < 0
  ) {
    throw new TypeError('El precio en centavos debe ser un entero no negativo');
  }

  if (
    typeof porcentaje !== 'number' ||
    !Number.isFinite(porcentaje) ||
    porcentaje < 0 ||
    porcentaje > 100
  ) {
    throw new TypeError('El porcentaje debe ser un número finito entre 0 y 100');
  }

  const descuento = (centavos * porcentaje) / 100;
  return Math.round(centavos - descuento);
}

/**
 * Suma precioCentavos * cantidad de todos los productos.
 * Cada producto tiene un precio entero >= 0 y una cantidad entera > 0.
 * Un arreglo vacío devuelve 0. No debe modificar los productos.
 * Una entrada inválida debe producir TypeError.
 */
function calcularSubtotal(productos) {
  if (!Array.isArray(productos)) {
    throw new TypeError('El argumento debe ser un arreglo de productos');
  }

  let subtotal = 0;

  for (const prod of productos) {
    if (
      !prod ||
      typeof prod.precioCentavos !== 'number' ||
      !Number.isInteger(prod.precioCentavos) ||
      prod.precioCentavos < 0
    ) {
      throw new TypeError('precioCentavos debe ser un entero no negativo');
    }

    if (
      typeof prod.cantidad !== 'number' ||
      !Number.isInteger(prod.cantidad) ||
      prod.cantidad <= 0
    ) {
      throw new TypeError('cantidad debe ser un entero mayor que cero');
    }

    subtotal += prod.precioCentavos * prod.cantidad;
  }

  return subtotal;
}

module.exports = { precioFinal, calcularSubtotal };