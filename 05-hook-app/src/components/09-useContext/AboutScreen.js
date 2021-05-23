import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext)

  const handleClick = () => {
    setUser({})
  }

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr/>
      <pre>
        { JSON.stringify(user, null, 4) }
      </pre>
      <button
        onClick={handleClick}
        className="btn btn-outline-warning">Reset</button>
    </div>
  )
}
