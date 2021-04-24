import React, { useCallback, useState } from 'react'
import { IncrementBtn } from './IncrementBtn'

export const CallBackHook = () => {

  const [show, setShow] = useState(false)
  const [counter, setCounter] = useState(10)

  const increment = useCallback( (num) => {
    setCounter(c => c + num)
  }, [setCounter] )

  return (
    <div>
      <h3>useCallBack Hook <small>{ counter }</small></h3>
      <hr />
      <IncrementBtn increment={increment} />
      <button onClick={ () => setShow( !show ) } className="btn btn-outline-primary ml-3">Show/Hide: {JSON.stringify(show)}</button>
    </div>
  )
}
