import { useState } from "react";

function App(){
let [counter,setCounter]=useState(10);

const Increase=()=>{
  if(counter<20 ){
    setCounter(counter+1);
  }
}
const Decrease=()=>{
  if(counter>0){
    setCounter(counter-1);
  }
}
return(
  <>
   <h1>counter is {counter} </h1>
   <button onClick={Increase}>increase</button><button onClick={Decrease}>Decrease</button>
  </>
)
}

export default App;