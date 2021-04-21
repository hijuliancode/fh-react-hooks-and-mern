import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const [state, increment, decrement, reset] = useCounter()

  return (
    <>
     <h1>Counter {state}</h1> 
     <hr/>
     <button onClick={ () => decrement(1) } className="btn btn-danger" >-1</button>
     <button onClick={ () => reset() } className="btn" >reset</button>
     <button onClick={ () => increment(1) } className="btn btn-primary mx-1" >+1</button>
    </>
  )
}
