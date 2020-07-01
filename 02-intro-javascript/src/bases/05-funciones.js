// Funciones
// Recomendable utilizar funciones por asignación para evitar sobreescribirlas

const saludar = function(nombre) { // Por asignación
  return `Hola ${ nombre }`
}
const saludar2 = (nombre) => { // De flecha
  return `Hola ${ nombre }`
}
const saludar3 = (nombre) => `Hola ${ nombre }`
const saludar4 = nombre => `Hola ${ nombre }`
const saludar5 = () => `Hola Mundo`

console.log(saludar('Meraki'))
console.log(saludar2('Ginna'))
console.log(saludar3('Petra'))
console.log(saludar4('Gohan'))
console.log(saludar5())

// Retornar un objeto con función de flecha

const getUser = () => ({
  uid: 'ABC123',
  username: 'LoremIpsum123'
})

const user = getUser()
console.log( user )

// Tarea:
// 1. Transformar a funcion de flecha
// 2. Retornar objeto implicito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
  return {
    uid: 'AHC285',
    username: nombre
  }
}
const usuarioActivo = getUsuarioActivo('Julian')
console.log( usuarioActivo )

// Solución: 

const getUsuarioActivo2 = ( nombre ) => ({
  uid: 'AHC285',
  username: nombre
})
const usuarioActivo2 = getUsuarioActivo2('Gohan')
console.log( usuarioActivo2 )