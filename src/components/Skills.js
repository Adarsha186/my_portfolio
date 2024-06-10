import React from 'react';
import '../styles/skills.css';
import { Element } from 'react-scroll';

const SkillSection = ({ title, skills }) => (
    <div className='b1'>
        <h1 className='header1'>{title}</h1>
        <div className='container'>
            {skills.map((s, index) => (
                <div className='wrapper' key={index}>
                    <img className='image' src={s.img} alt={s.name} />
                    <span className='title'>{s.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skills = [
        { name: 'Java', img: 'https://www.svgrepo.com/show/452234/java.svg', category: 'Web Development & Programming' },
        { name: 'Python', img: 'https://www.svgrepo.com/show/374016/python.svg', category: 'Web Development & Programming' },
        { name: 'HTML', img: 'https://www.svgrepo.com/show/452228/html-5.svg', category: 'Web Development & Programming' },
        { name: 'CSS', img: 'https://www.svgrepo.com/show/452185/css-3.svg', category: 'Web Development & Programming' },
        { name: 'JavaScript', img: 'https://www.svgrepo.com/show/353925/javascript.svg', category: 'Web Development & Programming' },
        { name: 'SQL', img: 'https://www.svgrepo.com/show/255832/sql.svg', category: 'Web Development & Programming' },
        { name: 'React Js', img: 'https://www.svgrepo.com/show/354259/react.svg', category: 'Frameworks & Tools' },
        { name: 'Node Js', img: 'https://www.svgrepo.com/show/354118/nodejs.svg', category: 'Frameworks & Tools' },
        { name: 'Git', img: 'https://www.svgrepo.com/show/452210/git.svg', category: 'Frameworks & Tools' },
        { name: 'AWS', img: 'https://www.svgrepo.com/show/448266/aws.svg', category: 'Frameworks & Tools' },
        { name: 'Django', img: 'https://www.svgrepo.com/show/452185/css-3.svg', category: 'Frameworks & Tools' },
        { name: 'OpenCV', img: 'https://www.svgrepo.com/show/354139/opencv.svg', category: 'Frameworks & Tools' },
        { name: 'MySQL', img: 'https://www.svgrepo.com/show/439233/mysql.svg', category: 'Database' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/354118/nodejs.svg', category: 'Database' },
        { name: 'PostgreSQL', img: 'https://www.svgrepo.com/show/354200/postgresql.svg', category: 'Database' }
    ];

    const categories = ['Web Development & Programming', 'Frameworks & Tools', 'Database'];

    return (
        <Element name='skills'>
            <div className='skills'>
                <div className='header-s'><h1>Technical Skills</h1></div>
                {categories.map((category, index) => (
                    <SkillSection
                        key={index}
                        title={category}
                        skills={skills.filter(skill => skill.category === category)}
                    />
                ))}
            </div>
        </Element>
        
    );
};

export default Skills;
