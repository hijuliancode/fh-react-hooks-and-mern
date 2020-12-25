import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser() should return an object', () => {
    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const userTest = getUser()
    expect( user ).toEqual( userTest )

  })
  // getUsuarioActivo debe retornar un objeto, recibe parametro
  test('getUsuarioActivo(param) should return an object ', () => {
    const name = 'Quiana'
    const userTest = getUsuarioActivo( name )
    expect( userTest ).toEqual( {
      uid: 'ABC567',
      username: name
    } )
  })
  
})
