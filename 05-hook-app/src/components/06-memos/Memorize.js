import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

  const [show, setShow] = useState(false)

  const [counter, increment] = useCounter(0)

  return (
    <div>
      <h1>Memorize <Small value={ counter } /></h1>
      <hr />
      <button onClick={ () => increment() } className="btn btn-primary">+1</button>
      <button onClick={ () => setShow( !show ) } className="btn btn-outline-primary ml-4">Show/Hide: {JSON.stringify(show)}</button>
    </div>
  )
}
