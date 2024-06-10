import React from 'react'
import '../styles/icon.css'
import Gh from '../images/github.png'
import Ln from '../images/linkedin.png'
import Ma from '../images/mail.png'

export const Icon = () => {
  return (
    <div className='icon'>
      <a href="https://github.com/Adarsha186" target="_blank" rel="noopener noreferrer">
        <img className='icon-image' src={Gh} alt='github' />
      </a>
      <a href="https://www.linkedin.com/in/yemparala-adarsha" target="_blank" rel="noopener noreferrer">
        <img className='icon-image' src={Ln} alt='LinkedIn' />
      </a>
      <a href="mailto:yemparala.adarsha@gmail.com">
        <img className='icon-image' src={Ma} alt='Mail' />
      </a>
    </div>
  )
}
