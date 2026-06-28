import React, { useState } from 'react'
import CreateContext from './CreateContext'

const CreateContextProvider = ({ children }) => {
    const [count,setCount]=useState(5)
  return (
    <CreateContext.Provider value={{count,setCount}}>
      { children }
    </CreateContext.Provider>
  )
}

export default CreateContextProvider
