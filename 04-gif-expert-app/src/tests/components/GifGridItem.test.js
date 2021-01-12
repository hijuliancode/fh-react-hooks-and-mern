import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Test GifGridItem.js', () => {
  let wrapper

  let dummyData = {
    url: '',
    title: '',
    externalUrl: ''
  }

  beforeEach(() => {
    wrapper = shallow( <GifGridItem { ...dummyData } /> )
  })

  test('Should render <GifGridItem />', () => {
    expect( wrapper ).toMatchSnapshot()
  })
})