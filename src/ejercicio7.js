// Ejercicio 7 - Ordenamiento y Reversión
const numeros = [5, 2, 9, 1, 7];
console.log('Ascendente:', [...numeros].sort((a, b) => a - b));
console.log('Descendente:', [...numeros].sort((a, b) => b - a));
const nombres = ['Ana', 'Luis', 'Marta', 'Juan'];
console.log('Alfabético:', [...nombres].sort());
const personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 22 },
  { nombre: 'Marta', edad: 19 },
  { nombre: 'Juan', edad: 21 }
];
console.log('Por edad:', [...personas].sort((a, b) => a.edad - b.edad));
console.log('Reverse números:', [...numeros].reverse());
