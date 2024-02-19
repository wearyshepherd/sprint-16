import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is some information about Carlos Chavez.</p>
      <Link to="/">Go Back to Home</Link> {/* This line adds a link to the home page */}
      {/* More about content */}
    </div>
  );
};

export default About;
