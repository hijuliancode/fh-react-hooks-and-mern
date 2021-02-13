import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory }  from '../../components/AddCategory'

describe('Test in AddCategory.js', () => {
  let wrapper;
  const setCategories = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks() // Limpiar Mocks en caso de haber
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
  })

  test('should render <AddCategory /> correctly', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  test('test, handleInputChange(), input debe cambiar', () => {
    const input = wrapper.find('#searchCategory')
    
    // Para simular onChange = change
    // Para simular el e (event), e.target.value usamos, {}
    // El objeto {} tiene el valor de e // $event
    input.simulate('change', { target: { value: 'Texto Demo e.target.value' } })
  })

  test('should not send the info with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect( setCategories ).not.toHaveBeenCalled()
  })
  
})
