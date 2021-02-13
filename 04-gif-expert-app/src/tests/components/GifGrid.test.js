import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Test in GifGrid', () => {
  let wrapper;

  test('Should render <GifGid />', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    wrapper = shallow( <GifGrid category='Thor' /> )
    expect( wrapper ).toMatchSnapshot()
  })

  test('Debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
    const gifs = [{
      id: 'LSJ12SAKDJS2',
      url: 'https://cualquiercosa.com/demo-imagen.png',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    wrapper = shallow( <GifGrid category='Thor' /> )

    expect( wrapper ).toMatchSnapshot()
  })
})
