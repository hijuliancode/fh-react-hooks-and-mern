const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45, 
  direccion: {
    ciudad: 'New York',
    zip: 32423141,
    lat: 21.3131231,
    lgn: 23.1231334,
  }
}

const persona2 = { ...persona }
persona2.nombre = 'Peter'

// console.table( persona )
console.log( persona )
console.log( persona2 )