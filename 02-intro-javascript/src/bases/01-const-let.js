// Variables y constantes
// Constante, nunca cambia de valor
// Solo existirán en el ambito o scope

const nombre = 'Meraki'
const apellido = 'Sosa'

let valorDado = 5
valorDado = 4

console.log(nombre, apellido, valorDado)

if ( true ) {
  const nombre = 'Ginna' // Es permitido debido a que no existen 2 variables en el mismo scope con este nombre
  let valorDado = 8
  console.log( valorDado, nombre )
}

console.log(nombre, apellido, valorDado)
