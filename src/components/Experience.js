// src/components/Experience.js
import React from 'react';
import '../styles/experience.css';
import { Element } from 'react-scroll';

const Experience = () => {
    return (
        <Element name='experience'>
            <div className='experience'>
                <h1 className='experience-h1'>Experience</h1>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <div className='experience-dates'>Oct 2023 – Present</div>
                        <div className='experience-details'>
                            <h2>Research Assistant</h2>
                            <h3>California State University - East Bay</h3>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='experience-dates'>Jan 2022 – Jun 2022</div>
                        <div className='experience-details'>
                            <h2>Project Intern</h2>
                            <h3>Shiash Info Solutions, Chennai, India</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Experience;
