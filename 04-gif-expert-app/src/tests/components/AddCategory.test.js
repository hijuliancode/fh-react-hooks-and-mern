import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory }  from '../../components/AddCategory'

describe('Test in AddCategory.js', () => {
  let wrapper;
  const setCategories = () => {}

  beforeEach(() => {
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
})
