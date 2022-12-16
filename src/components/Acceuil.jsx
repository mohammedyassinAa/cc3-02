import React from 'react'
import { Outlet } from 'react-router-dom'

const Acceuil = () => {
  return (
    <div className='container'>
        <header>Getion des Posts</header>
        <Outlet />
    </div>
)
}

export default Acceuil;