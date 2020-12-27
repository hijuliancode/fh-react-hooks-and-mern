import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp.js', () => {
  test('Debe mostrar <CouterApp/> correctamente', () => {
    const wrapper = shallow( <CounterApp /> )

    expect( wrapper ).toMatchSnapshot()
  })
  test('should mostrar el valor por defecto en 100', () => {
    const value = 100;
    const wrapper = shallow( <CounterApp value={ value } /> )

    const valueABuscar = wrapper.find('h2').text().trim() // .trim() borra los espacios en ambos lados

    expect( valueABuscar ).toBe(`${value}`)
  })
  
})