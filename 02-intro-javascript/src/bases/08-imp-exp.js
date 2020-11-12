// Import, export y funciones comunes de arreglos

// import heroes, { owners } from '../data/heroes'
import heroes from '../data/heroes'

const getHeroById = (id) => heroes.find( (hero) => hero.id === id )

const getHeroesByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner )

// console.log( getHeroById(1) )
// console.log( getHeroById(2) )
// console.log( getHeroById(3) )
// console.log( getHeroById(4) )
// console.log( getHeroById(5) ) 

// console.log( getHeroesByOwner('DC') )

// console.log( owners )

export {
    getHeroById,
    getHeroesByOwner
}