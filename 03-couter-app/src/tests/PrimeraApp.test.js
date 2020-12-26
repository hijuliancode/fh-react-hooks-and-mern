import React from 'react';
import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas en PrimeraApp', () => {
  test('should mostrar el mensaje Hola, soy Julian', () => {
    const saludo = 'Hola, soy Julian'
    // const wrapper = render( <PrimeraApp saludo={saludo} /> )
    const { getByText } = render( <PrimeraApp saludo={saludo} /> )
    expect( getByText(saludo) ).toBeInTheDocument()

  })
})
