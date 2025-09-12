// Ejercicio 8 - Desestructuración de Arrays
const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
const [l1, l2, l3] = lenguajes;
console.log('Primeros 3:', l1, l2, l3);
const [primero, , , , ultimo] = lenguajes;
console.log('Primero y último:', primero, ultimo);
const [first, ...resto] = lenguajes;
console.log('Primero:', first, 'Resto:', resto);
let a = 'uno', b = 'dos';
[a, b] = [b, a];
console.log('Intercambiados:', a, b);
