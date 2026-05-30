import React, { useState } from 'react'

const App = () => {

  const colors=["red","yellow","green","blue","pink","violet","aqua","olive"];

  const [color,setColor]=useState("black")
  return (
    <div className='h-screen w-screen' style={{backgroundColor:color}}>
        
      <div className='fixed bottom-12 text-center w-screen bg-white rounded-2xl p-3 flex gap-1.5 justify-around '>
         
        {
          colors?.map((colorbtn,index)=>(
            colorbtn==color ?
            (<button key={index} className={` cursor-pointer px-4 py-2 rounded-3xl scale-x-200 duration-200  `} style={{ backgroundColor: colorbtn }} onClick={()=>setColor(colorbtn)} >{colorbtn}</button>):(
              <button key={index} className={` cursor-pointer px-4 py-2 rounded-3xl`} style={{ backgroundColor: colorbtn }} onClick={()=>setColor(colorbtn)} >{colorbtn}</button>
            )
          ))
        }
      </div>

    </div>
  )
}

export default App
