const { precioFinal, calcularSubtotal } = require('../src/tienda');

describe('precioFinal', () => {
  test('aplica 20% a 10000 centavos y devuelve 8000', () => {
    // Preparar
    const precio = 10000;
    // Actuar
    const resultado = precioFinal(precio, 20);
    // Comprobar
    expect(resultado).toBe(8000);
  });

  test('no aplica descuento a 10000 centavos y devuelve 10000', () => {
    // Preparar
    const precio = 10000;
    // Actuar
    const resultado = precioFinal(precio, 0);
    // Comprobar
    // Ojo: corregido a 10000 según la tabla (antes decía 8000 por error)
    expect(resultado).toBe(10000);
  });

  test('aplica 100% a 10000 centavos y devuelve 0', () => {
    // Preparar
    const precio = 10000;
    // Actuar
    const resultado = precioFinal(precio, 100);
    // Comprobar
    expect(resultado).toBe(0);
  });

  test('aplica 15% a 10001 centavos y devuelve 8501', () => {
    // Preparar
    const precio = 10001;
    // Actuar
    const resultado = precioFinal(precio, 15);
    // Comprobar
    expect(resultado).toBe(8501);
  });

  test('precio negativo lanza TypeError', () => {
    // Comprobar errores con función flecha
    expect(() => precioFinal(-100, 20)).toThrow(TypeError);
  });

  test('tipo string es incorrecto y lanza TypeError', () => {
    // Comprobar errores con función flecha
    expect(() => precioFinal("1000", 20)).toThrow(TypeError);
  });

  test('porcentaje 101% lanza TypeError', () => {
    // Comprobar errores con función flecha
    expect(() => precioFinal(10000, 101)).toThrow(TypeError);
  });
});

describe('calcularSubtotal', () => {
  test('un carrito vacío devuelve 0', () => {
    expect(calcularSubtotal([])).toBe(0);
  });

  test('suma correctamente varios productos y cantidades', () => {
    const carrito = [
      { precioCentavos: 1000, cantidad: 2 },
      { precioCentavos: 500, cantidad: 3 }
    ];
    expect(calcularSubtotal(carrito)).toBe(3500);
  });

  test('admite un producto con precio cero', () => {
    const carrito = [
      { precioCentavos: 0, cantidad: 1 },
      { precioCentavos: 100, cantidad: 1 }
    ];
    expect(calcularSubtotal(carrito)).toBe(100);
  });

  test('rechaza una cantidad cero y un precio negativo', () => {
    const carritoCantidadCero = [{ precioCentavos: 1000, cantidad: 0 }];
    const carritoPrecioNegativo = [{ precioCentavos: -1, cantidad: 1 }];

    expect(() => calcularSubtotal(carritoCantidadCero)).toThrow(TypeError);
    expect(() => calcularSubtotal(carritoPrecioNegativo)).toThrow(TypeError);
  });

  test('rechaza una entrada que no sea un arreglo', () => {
    expect(() => calcularSubtotal(null)).toThrow(TypeError);
  });

  test('conserva el arreglo y los productos originales', () => {
    const carritoOriginal = [
      { precioCentavos: 1000, cantidad: 2 },
      { precioCentavos: 500, cantidad: 3 }
    ];
    
    // Creamos una copia profunda para comparar después
    const copiaOriginal = JSON.parse(JSON.stringify(carritoOriginal));

    calcularSubtotal(carritoOriginal);

    // Verificamos con toEqual que el arreglo y su contenido no hayan mutado
    expect(carritoOriginal).toEqual(copiaOriginal);
  });
});