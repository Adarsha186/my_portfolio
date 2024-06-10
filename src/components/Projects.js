import React from 'react';
import '../styles/project.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from '../images/p1.png';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.png';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';
import p6 from '../images/p6.png';
import { Element } from 'react-scroll';

const projects = [
    {
        title: "Enhancement of Vision-based Data for Bridge Health Monitoring",
        description: "Applied image processing techniques to calculate sub-pixel level displacement of the bridge validated against accelerometer sensor readings from the full field experiment. Currently implementing neural networks for feature extraction and deformation shape identification by overcoming bit depth of digital cameras.",
        techStack: "Python, Matlab",
        img: p1,
        link: "https://drive.google.com/file/d/1tSICz4-1e_0hykZxoypw-ygb4G0Aymh1/view"
    },
    {
        title: "Employee Management System",
        description: "Performed CRUD operations (Create, Read, Update and Delete) on the employee database using Java. Utilized JSP and servlets to locally build and host the project in a web application. MySQL was used to store, retrieve and update the data.",
        techStack: "Java, Servlets, MySQL",
        img: p2,
        link: "https://github.com/Adarsha186/Employee_Management_System_JSP"
    },
    {
        title: "Ecommerce Website",
        description: "Fully developed a responsive e-commerce website, implemented user authentication, basket functionality, order history and session moderation.",
        techStack: "ReactJS, ExpressJS, Firebase, Cloud Functions, Stripe API",
        img: p3,
        link: "https://github.com/Adarsha186/amazon_clone"
    },
    {
        title: "Kaggle: Disease Spread Prediction",
        description: "Developed a predictive model of 81% accuracy using R programming for forecasting number of dengue cases present in the city.",
        techStack: "R studio, mice, Support Vector, MySQL",
        img: p6,
        link: "https://github.com/Adarsha186/projects/tree/master/DengAI%20Disease%20Spread%20Prediction"
    },
    {
        title: "Carpool Application",
        description: "Built a web component for carpooling based on the seat availability, location matching and driver information. Deployed the project deliverables using API gateways and integrating Lambda functions using Node and S3 for hosting.",
        techStack: "React, AWS Lambda, Gateway APIs, DynamoDB",
        img: p4,
        link: "https://github.com/Adarsha186/carpoolcs"
    },
    {
        title: "Profile Clustering",
        description: "Launched a sophisticated recommendation system to assist students in the university selection process, performing profile shortlisting based on essential criteria. Implemented the project in Python using the Flask framework.",
        techStack: "Python, Flask, JavaScript, JSON, scikit-learn, Android Studio",
        img: p5,
        link: "https://github.com/Adarsha186/Capstone-Web-App"
    }
];

const Projects = () => {
    return (
        <Element name='projects'>
            <div className='projects'>
                <div className='header-p'><h1>Projects</h1></div>
                <Carousel
                    className='carousel'
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    centerMode={true}
                    centerSlidePercentage={100}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    {projects.map((project, index) => (
                        <div className='project-item' key={index}>
                            <img src={project.img} alt={project.title} className='project-image' style={{ width: '35rem', height: 'auto' }} />
                            <div className='project-info'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>View</a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </Element>
    );
};

export default Projects;
