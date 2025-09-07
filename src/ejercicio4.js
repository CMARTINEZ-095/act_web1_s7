// Ejercicio 4 - Análisis de Ventas con reduce()
const ventas = [
  { producto: 'Laptop', cantidad: 2, precio: 1200, fecha: '2025-09-01' },
  { producto: 'Mouse', cantidad: 5, precio: 25, fecha: '2025-09-02' },
  { producto: 'Monitor', cantidad: 1, precio: 600, fecha: '2025-09-03' },
  { producto: 'Silla', cantidad: 3, precio: 350, fecha: '2025-09-04' },
  { producto: 'Laptop', cantidad: 1, precio: 1200, fecha: '2025-09-05' }
];

const totalIngresos = ventas.reduce((acc, v) => acc + v.precio * v.cantidad, 0);
console.log('Total ingresos: $', totalIngresos);
const cantidades = ventas.reduce((acc, v) => {
  acc[v.producto] = (acc[v.producto] || 0) + v.cantidad;
  return acc;
}, {});
const productoMasVendido = Object.entries(cantidades).reduce((max, curr) => curr[1] > max[1] ? curr : max);
console.log('Producto más vendido:', productoMasVendido[0]);
const promedioVenta = totalIngresos / ventas.length;
console.log('Promedio por transacción: $', promedioVenta);
