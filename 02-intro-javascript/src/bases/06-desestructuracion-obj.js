// Desestructruación de Objetos
// Desestructuración por asignación

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
}

// const { nombre, edad, clave:key } = persona

// console.log( nombre )
// console.log( edad )
// console.log( key ) // Puedo desestructurar a otro nombre de variable

////

const useContext = ( { clave, nombre, edad, clave:key, rango = 'Capitan' } ) => {
  // console.log( nombre, edad, key, rango )
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.1231233,
      lng: 14.3243442
    }
  }
}

const avenger = useContext( persona )
const { nombreClave, anios, latlng: { lat, lng } } = avenger

console.log( nombreClave, anios )
console.log( lat, lng )