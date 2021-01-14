import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory }  from '../../components/AddCategory'

describe('Test in AddCategory.js', () => {
  const setCategories = () => {}
  test('should render <AddCategory /> correctly', () => {
    const wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    expect( wrapper ).toMatchSnapshot()
  })
})
