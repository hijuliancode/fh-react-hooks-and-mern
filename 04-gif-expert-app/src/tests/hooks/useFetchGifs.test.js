// useFetchGifs tests

import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('test in hook useFetchGifs', () => {

  test('should return initial state', async () => {
    // const { data, loading } = useFetchGifs('Thor') // Debido a error generado en consola, no se hace de esta forma
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Thor' ))
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect( data ).toEqual( [] )
    expect( loading ).toBe( true )
  })

  test('should return images array and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Thor' ))
    await waitForNextUpdate()

    const { data, loading } = result.current

    expect( data.length ).toEqual( 10 )
    expect( loading ).toBe( false )
  })

})