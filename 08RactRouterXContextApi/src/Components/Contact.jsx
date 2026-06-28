import React, { useContext } from 'react'
import CreateContext from '../ContextApi/CreateContext'

const Contact = () => {
  const {setCount} =useContext(CreateContext)
  return (
    <div>
     <button onClick={()=>setCount(5)} className="bg-blue-600 text-white cursor-pointer  px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">CLick to reset Count</button>
    </div>
  )
}

export default Contact
