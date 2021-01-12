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

  test('Should as a <p> with title inside', () => {
    const p = wrapper.find('p')
    
    expect( p.text().trim() ).toBe( dummyData.title )
  })

  test('Should render <img /> correctly', () => {
    const img = wrapper.find('img')

    // Puedo validar las propiedades de un elemento a traves de elm.props(), ejemplo img.props()
    // También se puede validar solo una propiedad, ejemplo: img.prop('alt').toBe( dummyData.title )
    // console.log(img.props())

    expect( img.props().src ).toBe( dummyData.url )
    expect( img.prop('src') ).toBe( dummyData.url ) // Lo mismo que el anterior

    expect( img.props().alt ).toBe( dummyData.title )
    expect( img.prop('alt') ).toBe( dummyData.title ) // Lo mismo que el anterior
  })

  test('Should has class animate__fadeIn', () => {
    const className = wrapper.prop('className')
    expect( className.includes('animate__fadeIn') ).toBe(true)

    expect( wrapper.hasClass('animate__fadeIn') ).toBe( true ) // Forma nativa de Jest
  })

})