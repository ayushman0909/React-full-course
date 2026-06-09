import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data=useLoaderData()
 
  
  return (
    <div>
      <img src={data.avatar_url} alt="" className='rounded-3xl' />
      <div className='text-3xl '>github followers:{data.followers}</div>
    </div>
  )
}

export default Github;

export const GetGithubInfo=async ()=>{
  const res=await fetch("https://api.github.com/users/hiteshchoudhary")
   const data = await res.json();

  

  return data;
}
