import React from 'react';
import Image from '../images/pfp.jpg';
import '../styles/about.css';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <div className="about">
        <img src={Image} alt="profile" className="about-image" />
        <div className="about-text">
          <h1 className="about-h1">About Me!!!</h1>
          <p className="about-p">Computer science graduate, proficient in developing end-to-end web applications. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.</p>
          <a href="https://drive.google.com/file/d/184yue43BY0MyRTG-327_lMzZ1IT16Q62/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="about-button">Resume</a>
        </div>
      </div>
    </Element>
  );
}

export default About;
