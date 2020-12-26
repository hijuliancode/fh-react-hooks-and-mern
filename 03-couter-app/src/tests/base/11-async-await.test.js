import { getImagen } from "../../base/11-async-await"

describe('Probando async-await y fetch', () => {
  test('debe retornar el url de la imágens', async () => {
    const url = await getImagen()

    // expect( typeof url ).toBe( 'string' )
    expect( url.includes('https://') ).toBe( true )
  })
})
