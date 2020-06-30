// Template String
// Permiten utilizar expresiones y en estas usar código javascript
// Permiten saltos de linea

const nombre = 'Ginna'
const apellido = 'Mora'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido} ${ 0 + 1 }`
console.log(nombreCompleto)

function getSaludo(nombre) {
  return `Hola ${nombre}`
}

console.log(`Este es un saludo: ${ getSaludo(nombre) }`)
