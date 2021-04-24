import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

  const [show, setShow] = useState(false)
  const [counter, increment] = useCounter(100)
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

  return (
    <div>
      <h3>MemoHook <small>{ counter }</small></h3>
      <p>{ memoProcesoPesado }</p>
      <hr />
      <button onClick={ () => increment() } className="btn btn-primary">+1</button>
      <button onClick={ () => setShow( !show ) } className="btn btn-outline-primary ml-3">Show/Hide: {JSON.stringify(show)}</button>
    </div>
  )
}
