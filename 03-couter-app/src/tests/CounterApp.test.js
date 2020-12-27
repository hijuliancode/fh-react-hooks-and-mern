import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp.js', () => {
  let wrapper; // undefined

  beforeEach(() => {
    // console.log('Se ejecuta antes de cada prueba')
    wrapper = shallow( <CounterApp /> )
  })

  test('Debe mostrar <CouterApp/> correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('should mostrar el valor por defecto en 100', () => {
    const value = 100;
    const wrapper = shallow( <CounterApp value={ value } /> )
    const valueABuscar = wrapper.find('h2').text().trim() // .trim() borra los espacios en ambos lados

    expect( valueABuscar ).toBe(`${value}`)
  })

  test('should incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const valueABuscar = wrapper.find('h2').text().trim()

    expect( valueABuscar ).toBe('11')
  })

  test('should dcrementar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click')
    const valueABuscar = wrapper.find('h2').text().trim()

    expect( valueABuscar ).toBe('9')
  })
  
  
})