import React from 'react';
import { shallow } from 'enzyme';
// import { render } from "@testing-library/react"

import PrimeraApp from "../PrimeraApp"

describe('Pruebas en PrimeraApp', () => {
  // test('should mostrar el mensaje Hola, soy Julian', () => {
  //   const saludo = 'Hola, soy Julian'
  //   // const wrapper = render( <PrimeraApp saludo={saludo} /> )
  //   const { getByText } = render( <PrimeraApp saludo={saludo} /> )
  //   expect( getByText(saludo) ).toBeInTheDocument()
  // })
  test('should mostrar <PrimeraApp/> correctamente', () => {
    const saludo = 'Hola, soy Goku'
    const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )

    expect( wrapper ).toMatchSnapshot();
  })
  
})
