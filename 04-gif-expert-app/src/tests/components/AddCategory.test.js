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
  
  test('should call setCategories and clear the input search box', () => {
    const input = wrapper.find('#searchCategory')

    // 1. Simular el inputChange
      input.simulate('change', { target: { value: 'IronMan' } })
    // 2. Simular el Submit del Formulario
      wrapper.find('form').simulate('submit', { preventDefault(){} })
      
    // 3. Se debe de haber llamado el setCategories
      expect( setCategories ).toHaveBeenCalled()
      expect( setCategories ).toHaveBeenCalledTimes(1)
      expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

    // 4. El value del input debe de estar vacio ''
      expect( input.prop('value') ).toBe( '' )

  })
  

})
