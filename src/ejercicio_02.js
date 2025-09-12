// Ejercicio 2 - Filtrado de Productos por Categoría
const inventario = [
  { id: 1, nombre: 'Laptop', precio: 1200, categoria: 'Electrónicos', stock: 8 },
  { id: 2, nombre: 'Mouse', precio: 25, categoria: 'Electrónicos', stock: 15 },
  { id: 3, nombre: 'Silla', precio: 350, categoria: 'Muebles', stock: 5 },
  { id: 4, nombre: 'Libro', precio: 40, categoria: 'Papelería', stock: 20 },
  { id: 5, nombre: 'Monitor', precio: 600, categoria: 'Electrónicos', stock: 3 }
];

const electronicos = inventario.filter(p => p.categoria === 'Electrónicos');
console.log('Electrónicos:', electronicos);
const bajoStock = inventario.filter(p => p.stock < 10);
console.log('Stock < 10:', bajoStock);
const caros = inventario.filter(p => p.precio > 500);
console.log('Precio > $500:', caros);
