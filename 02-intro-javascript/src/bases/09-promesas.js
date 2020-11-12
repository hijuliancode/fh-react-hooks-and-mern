// Promesas

const { getHeroById } = require("./bases/08-imp-exp")

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2)
//     resolve(heroe)
//     // reject('No se pudo encontrar el heroe')
//   }, 2000)
// } )

// promesa
//   .then((heroe) => {
//     console.log('heroe', heroe)
//   })
//   .catch((err) => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id)
      if (heroe) {
        return resolve(heroe)
      }
      return reject('No se pudo encontrar el heroe')
    }, 2000)
  } )
}

getHeroeByIdAsync(2)
  // .then(heroe => console.log('Heroe =>', heroe))
  // .catch(err => console.warn('Error => ', err))
  .then(console.log)
  .catch(console.warn)