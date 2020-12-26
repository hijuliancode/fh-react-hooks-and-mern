import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes';

describe('Pruebas con 09-promesas', () => {
  test('getHeroeByIdAsync() Debe retornar un Héroe async', ( done ) => {
    const id = 1
    getHeroeByIdAsync( id )
      .then( heroe => {
        expect( heroe ).toBe( heroes[0] )
        done()
      })
  })
  test('getHeroeByIdAsync() debería retornar error, debido a id incorrecto ', ( done ) => {
    const id = 1002312
    getHeroeByIdAsync( id )
      .catch( message => {
        expect( message ).toBe('No se pudo encontrar el héroe')
        done()
      })
  })
  
})
