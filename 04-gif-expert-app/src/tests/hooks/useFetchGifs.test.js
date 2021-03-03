// useFetchGifs tests

import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('test in hook useFetchGifs', () => {
  test('should return initial state', () => {
    const category = 'Thor'
    // const { data, loading } = useFetchGifs(category) // Debido a error generado en consola, no se hace de esta forma

    const { result } = renderHook(() => useFetchGifs( category ))
    const { data, loading } = result.current;

    expect( data ).toEqual( [] )
    expect( loading ).toBe( true )
  })
})