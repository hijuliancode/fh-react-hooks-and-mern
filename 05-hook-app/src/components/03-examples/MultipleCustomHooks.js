import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const data = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
  console.log('data=>>>', data)

  return (
    <>
      <h1>Custom Hooks</h1>
    </>
  )
}
