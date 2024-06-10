import React from 'react'
import Image from '../images/pfp.jpg'
import '../styles/about.css'
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name='about'>
      <div className='about'>
        <div className='about-text'>
          <h1 className='about-h1'>About Me!!!</h1>
          <p className='about-p'>Computer science graduate, proficient in developing end-to-end web applications. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.</p>
          <a href="https://drive.google.com/file/d/1bqjAin3gPku4V37cYEvhiRVxeU7DVqGO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="about-button">Resume</a>
        </div>
        <img src={Image} alt='profile' style={{ width: '20rem', height: 'auto' }} />
      </div>
    </Element>
  )
}

export default About