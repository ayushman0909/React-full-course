import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id}=useParams()
  return (
    <div>
      username wriiten in params :{id}
    </div>
  )
}

export default User
