import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Test GifGridItem.js', () => {
  let wrapper

  let dummyData = {
    url: 'https://i.giphy.com/media/0qIdaOZwwr7zfQGXOY/giphy-downsized-medium.gif',
    title: 'Dragon Ball GIF by TOEI Animation UK',
    externalUrl: 'https://i.giphy.com/media/0qIdaOZwwr7zfQGXOY/giphy-downsized-medium.gif/tile',
  }

  beforeEach(() => {
    wrapper = shallow( <GifGridItem { ...dummyData } /> )
  })

  test('Should render <GifGridItem />', () => {
    expect( wrapper ).toMatchSnapshot()
  })
})