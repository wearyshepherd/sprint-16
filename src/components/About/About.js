import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url('/about-back.png')`, // Ensure this path is correct
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
    fontFamily: '"Press Start 2P", cursive',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={backgroundStyle}>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
      </nav>
      <div style={contentBoxStyle}>
        <h1 style={titleStyle}>About Me</h1>
        <p style={paragraphStyle}>
          I&apos;m nearing the end of my journey at Trippleten, where I&apos;ve honed my skills in technology and software development...
          {/* Add more personal details or professional achievements as needed */}
        </p>
      </div>
    </div>
  );
};

export default About;
