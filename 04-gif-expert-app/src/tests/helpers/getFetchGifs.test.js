import { getFetchGifs } from "../../helpers/getFetchGifs"

describe('Test getFetchGifs.js', () => {
  test('Should get 10 items with -> getFetchGifs(category)', async () => {
    const gifs = await getFetchGifs('Avatar')
    expect( gifs.length ).toBe( 10 )
  })
  test('Should get 0 items with -> getFetchGifs()', async () => {
    const gifs = await getFetchGifs('')
    expect( gifs.length ).toBe( 0 )
  })
})