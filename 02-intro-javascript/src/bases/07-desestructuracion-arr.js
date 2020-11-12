// Desestructruación de Arreglos

const personajes = [ 'Goku', 'Vegeta', 'Trunks', 'Gohan' ]

const [ , , personaje3 ] = personajes

console.log( personaje3 )

const retornaArreglo = () => {
  return ['abc', 123]
}

const [ letras, numeros ] = retornaArreglo()

console.log(letras, numeros)

// TAREA:
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo valor del arreglo se llamará setNombre

const useState = ( valor ) => {
  return [ valor, () => { console.log('Hola Mundo') } ]
}

const [nombre, setNombre] = useState('Goku')

console.log(nombre)
setNombre()

