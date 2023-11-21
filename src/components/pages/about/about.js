import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-picture">
        <img src="/profile-picture.jpg" alt="Profile" />
      </div>
      <div className="bio">
        <h2>Shaun Swinehart</h2>
        <p>
          Welcome to my portfolio! I'm a from Muscle Shoals, Alabama and have a love for creating
          user-friendly and visually appealing websites. I enjoy working with technologies
          like React, MySQL, Express, and more.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
