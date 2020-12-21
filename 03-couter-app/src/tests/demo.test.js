
// test( 'Mi primera prueba, debe informar que es lo que estamos probando', () => {
//   const isActive = true;
//   if ( isActive ) {
//     throw new Error('No está activo')
//   }
// })

describe('Agrupar pruebas: Pruebas en el archivo demo.test.js', () => {
  test('deben de ser iguales los string', () => {
    // 1. Inicialización: Preparación de lo que queremos hacer
    const mensaje = 'hola mundo'
  
    // 2. Estímulo
    const mensaje2 = `hola mundo`
  
    // 3. Observar el comportamiento
    expect( mensaje ).toBe( mensaje2 ) // ===
  })  
})
