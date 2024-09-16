import React from 'react'
import Context from './Context'

const MyState = (children) => {

  const name = "Akshit Gupta"
  return (

    <Context.Provider value={name}>
        {children}
    </Context.Provider>
  )
}

export default MyState 