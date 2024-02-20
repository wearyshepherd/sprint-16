import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url('/about-back.png')`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  const contentBoxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: '"Press Start 2P", cursive', // This is the 8-bit style font
  };

  const paragraphStyle = {
    lineHeight: '1.6', // This increases the line spacing
  };

  return (
    <div style={backgroundStyle}>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
      </nav>
      <div style={contentBoxStyle}>
        <h1 style={titleStyle}>About Me</h1>
        <p style={paragraphStyle}>
          I'm nearing the end of my journey at Trippleten, where I've honed my skills in technology and software development. 
          My educational background includes a comprehensive media communication program at Full Sail University, where I mastered 
          a variety of disciplines such as audio and media production. Currently, I'm transitioning from my role as a delivery driver 
          for the United States Postal Service to a career in the tech industry. This pivot reflects my passion for technology and 
          my commitment to continuous learning and growth.
        </p>
        {/* Add more personal details or professional achievements as needed */}
      </div>
    </div>
  );
};

export default About;