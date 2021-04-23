import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleuseRef = () => {

  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>RealExampleuseRef</h1>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-primary"
        type="button">Show/Hide</button>
      <hr />

      { show && <MultipleCustomHooks /> }
    </div>
  )
}
