import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () => {
  // Si getSaludo(param) tiene parametro
  test('getSaludo(param) debe retornar : Hola Valentina', () => {
    const nombre = 'Valentina'
    const saludo = getSaludo( nombre )
    expect( saludo ).toBe( `Hola ${nombre}` )
  })
  // Si getSaludo() no tiene parametro
  test('getSaludo() debe retornar : Hola Carlos', () => {
    const saludo = getSaludo()
    expect( saludo ).toBe( `Hola Carlos` )
  })
})