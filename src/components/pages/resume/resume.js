import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>
        Below is a link to download my resume. Feel free to check it out for more details about my
        education, work experience, and skills.
      </p>
      <a href="/path-to-your-resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
