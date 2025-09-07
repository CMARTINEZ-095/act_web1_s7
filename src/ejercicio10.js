// Ejercicio 10 - Métodos de Objeto
const producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 1200,
  categoria: 'Electrónicos',
  stock: 8
};
console.log('Claves:', Object.keys(producto));
console.log('Valores:', Object.values(producto));
console.log('Pares clave-valor:', Object.entries(producto));
Object.entries(producto).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
