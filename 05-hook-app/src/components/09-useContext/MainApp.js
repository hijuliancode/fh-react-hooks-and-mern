import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

  const user = {
    id: '01777',
    name: 'Julian Alejandro',
    email: 'hijuliansosa@gmail.com'
  }

  return (
    <UserContext.Provider value={ user }>
      <AppRouter />
    </UserContext.Provider>
  )
}
