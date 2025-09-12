// Ejercicio 3 - Transformación de Datos con map()
const estudiantes = [
  { nombre: 'Ana', edad: 20, notas: [80, 90, 70] },
  { nombre: 'Luis', edad: 22, notas: [60, 65, 55] },
  { nombre: 'Marta', edad: 19, notas: [95, 85, 100] },
  { nombre: 'Juan', edad: 21, notas: [50, 60, 45] }
];

const nombres = estudiantes.map(e => e.nombre);
console.log('Nombres:', nombres);
const promedios = estudiantes.map(e => e.notas.reduce((a, n) => a + n, 0) / e.notas.length);
console.log('Promedios:', promedios);
const estudiantesEstado = estudiantes.map(e => {
  const promedio = e.notas.reduce((a, n) => a + n, 0) / e.notas.length;
  return { ...e, estado: promedio >= 70 ? 'Aprobado' : 'Reprobado' };
});
console.log('Con estado:', estudiantesEstado);
