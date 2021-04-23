import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const [ counter, increment ] = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  // Los ! convierte la variable en tipo booleano, evalua si tiene datos o no
  // data = null, !data = false no tiene información, !!data = true si tiene información
  // const { author, quote } = !!data && data[0]
  const { author, quote } = !!data && data

  return (
    <>
      <h1>Custom Hooks</h1>

      <hr />

      { loading ? (
          <div className="alert alert-info text-center">
            Cargando...
          </div>
        ) : (
          <blockquote className="blockquote text-end">
            <p>{ quote }</p>
            <footer className="blockquote-footer">- { author } -</footer>
          </blockquote>
        )
      }

      <button
        onClick={ () => increment() }
        className="btn btn-primary">Siguiente Quote</button>
    </>
  )
}
