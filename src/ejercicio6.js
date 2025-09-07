// Ejercicio 6 - Manipulación de Arrays
let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log('push:', arr);
arr.pop();
console.log('pop:', arr);
arr.unshift(0);
console.log('unshift:', arr);
arr.shift();
console.log('shift:', arr);
arr.splice(2, 0, 99);
console.log('splice:', arr);
const porcion = arr.slice(2, 5);
console.log('slice:', porcion);
