import React from 'react'
import facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'
import twitter from './twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
        <img src={twitter} alt="" />
    </div>
  )
}

export default Footer
