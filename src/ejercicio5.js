// Ejercicio 5 - Búsqueda y Verificación
const usuarios = [
  { id: 1, nombre: 'Ana', email: 'ana@mail.com', activo: true },
  { id: 2, nombre: 'Luis', email: 'luis@mail.com', activo: false },
  { id: 3, nombre: 'Marta', email: 'marta@mail.com', activo: true },
  { id: 4, nombre: 'Juan', email: 'juanmail.com', activo: true }
];

const usuarioEmail = usuarios.find(u => u.email === 'luis@mail.com');
console.log('Usuario por email:', usuarioEmail);
const indexUsuario = usuarios.findIndex(u => u.id === 3);
console.log('Posición usuario id=3:', indexUsuario);
const hayInactivos = usuarios.some(u => !u.activo);
console.log('¿Hay usuarios inactivos?', hayInactivos);
const todosEmailValido = usuarios.every(u => u.email.includes('@'));
console.log('¿Todos tienen email válido?', todosEmailValido);
