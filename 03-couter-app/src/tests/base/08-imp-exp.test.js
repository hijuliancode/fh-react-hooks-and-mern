import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {
  test('getHeroeById(id) retorna heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id)
    const heroeData = heroes.find( h => h.id === id)

    expect( heroe ).toEqual( heroeData )
  })
  test('getHeroeById(x) retorna undefined si no existe el heroe', () => {
    const id = 1000;
    const heroe = getHeroeById(id)

    expect( heroe ).toBe( undefined )
  })

  // Tarea: Evaluar Array Heroes de DC
  test('getHeroesByOwner() should return the DC Heroes ', () => {
    const owner = 'DC'
    const match = heroes.filter((h) => h.owner === owner)

    expect( match ).toEqual( getHeroesByOwner( owner ) )
  })
  
  // Tarea: Evaluar Array Heroes de Marvel
  // length = 2 // toBe = 2
  test('getHeroesByOwner() should return the Marvel Heroes', () => {
    const owner = 'Marvel'
    const match = heroes.filter((h) => h.owner === owner)

    expect( match.length ).toBe( getHeroesByOwner(owner).length )
  })
  
})
