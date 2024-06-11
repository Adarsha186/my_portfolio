// src/components/Experience.js
import React from 'react';
import '../styles/experience.css';
import { Element } from 'react-scroll';

const Education = () => {
    return (
        <Element name='education'>
            <div className='experience'>
                <h1 className='experience-h1'>Education</h1>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <div className='experience-dates'>Aug 2022 – May 2024</div>
                        <div className='experience-details'>
                            <h2>Master of Science, Computer Science</h2>
                            <h3>California State University - East Bay, Hayward, CA</h3>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='experience-dates'>Aug 2018 – Jun 2022</div>
                        <div className='experience-details'>
                            <h2>Bachelor of Technology, Computer Science and Engineering</h2>
                            <h3>Vellore Institute of Technology, Amaravati, India</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Education;