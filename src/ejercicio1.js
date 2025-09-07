// Ejercicio 1 - Gestión de Inventario Básico
const inventario = [
  { id: 1, nombre: 'Laptop', precio: 1200, categoria: 'Electrónicos', stock: 8 },
  { id: 2, nombre: 'Mouse', precio: 25, categoria: 'Electrónicos', stock: 15 },
  { id: 3, nombre: 'Silla', precio: 350, categoria: 'Muebles', stock: 5 },
  { id: 4, nombre: 'Libro', precio: 40, categoria: 'Papelería', stock: 20 },
  { id: 5, nombre: 'Monitor', precio: 600, categoria: 'Electrónicos', stock: 3 }
];

console.log('Todos los productos:', inventario);
console.log('Total de productos:', inventario.length);
const valorTotal = inventario.reduce((acc, {precio, stock}) => acc + precio * stock, 0);
console.log('Valor total del inventario: $', valorTotal);
