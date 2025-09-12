// Ejercicio 9 - Desestructuración de Objetos
const persona = {
  nombre: 'Ana',
  edad: 30,
  direccion: {
    ciudad: 'Madrid',
    pais: 'España'
  },
  contacto: {
    email: 'ana@mail.com',
    telefono: '123456789'
  }
};
const { nombre, edad } = persona;
console.log('Nombre:', nombre, 'Edad:', edad);
const { nombre: n, edad: e } = persona;
console.log('Renombrado:', n, e);
const { profesion = 'Desarrolladora' } = persona;
console.log('Profesión:', profesion);
const { direccion: { ciudad, pais }, contacto: { email } } = persona;
console.log('Ciudad:', ciudad, 'País:', pais, 'Email:', email);
const { nombre: nombre2, ...resto } = persona;
console.log('Resto del objeto:', resto);
