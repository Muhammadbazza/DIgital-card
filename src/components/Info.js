import React from 'react'
import pacman from './pacman.png'
import email from './email.png'

const Info = () => {
  return (
    <div className='top'>
        <img src={pacman} />
        <h3>Amar Shakur</h3>
        <h5>Rapper/Actor</h5>
        <button>
            <img src={email} alt="" />
            Email
        </button>
    </div>
  )
}

export default Info
