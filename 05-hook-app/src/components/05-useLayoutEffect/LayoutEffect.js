import React, { useEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {

  const [ counter, increment ] = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  // Los ! convierte la variable en tipo booleano, evalua si tiene datos o no
  // data = null, !data = false no tiene información, !!data = true si tiene información
  // const { author, quote } = !!data && data[0]
  const { quote } = !!data && data

  const pTag = useRef()

  const [boxSize, setBoxSize] = useState({})

  useEffect(() => {
    setBoxSize( pTag.current.getBoundingClientRect() )
  }, [quote])

  return (
    <>
      <h1>Layout - LayoutEffect</h1>

      <hr />

      <blockquote className="blockquote text-end">
        <p ref={ pTag }>{ quote }</p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 2) }
      </pre>

      <button
        onClick={ () => increment() }
        className="btn btn-primary">Siguiente Quote</button>
    </>
  )
}
