import React, { useState, useEffect } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Icon } from './components/Icon';

function App() {
  const [loading, setLoading] = useState(true);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (3 - 1) + 1,
      }));
    };
    setStars(generateStars());

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <CustomNavbar />
      <div className="App">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${star.x}vw`,
              top: `${star.y}vh`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          >
          </div>
        ))}
        <div className="crawl-text">
          <p className='intro typing-animation'>Hello there!! I'm...</p>
          <p className="name-style">
            <div className="name-big">Adarsha</div>
            <div className="name-small">Yemparala</div>
          </p>
          <p className='outro'>Software Engineer and Full-stack developer</p>
        </div>
      </div>
      <div className='sections'><About /></div>
      <div className='sections'><Skills /></div>
      <div className='sections'><Projects /></div>
      <div className='sections'><Contact /></div>
      <div className='sections'><Icon /></div>
      <div className='sections'><Footer/></div>
    </div>
  );
}

export default App;
