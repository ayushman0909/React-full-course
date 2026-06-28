import React, { useContext, useState } from 'react'
import CreateContext from "../ContextApi/CreateContext"
const Home = () => {
  const {setCount}=useContext(CreateContext)
 
  return (
    <div>
      
      <button onClick={()=>setCount((prev)=>prev+1)} className="bg-blue-600 text-white px-5 py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition duration-300">CLick to increase Count</button>
    </div>
  )
}

export default Home
