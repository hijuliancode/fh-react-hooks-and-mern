// Arreglos
// Colección de información que se encuentra dentro de una variable

// const arreglo = new Array()
const arreglo = [1, 2, 3, 4]

let arreglo2 = arreglo
// arreglo2.push(5) // No recomendable agregar valores con push
arreglo2 = [ ...arreglo, 5 ]

const arreglo3 = arreglo2.map(x => x * 2)

console.log( arreglo )
console.log( arreglo2 )
console.log( arreglo3 )