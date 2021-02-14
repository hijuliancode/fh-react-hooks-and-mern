import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertAppComponent from '../GifExpertApp'


describe('Test in GifExpertApp.js', () => {
  let wrapper;

  test('should render <GifExpertApp />', () => {
    wrapper = shallow( <GifExpertAppComponent /> )
    expect( wrapper ).toMatchSnapshot()
  })

  test('should render a categories list', () => {
    const categories = [ { id: 'DragonBall', name: 'Dragon Ball' }, { id: 'IronMan', name: 'Iron Man' } ]
    const wrapper = shallow( <GifExpertAppComponent defaultCategories={ categories } /> )
    
    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('GifGrid').length ).toBe( categories.length )

  })

})