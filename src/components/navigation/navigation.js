import React from 'react';
import './Navigation.css';

const Navigation = ({ currentSection, onNavClick }) => {
  return (
    <nav>
      <ul>
        <li
          className={currentSection === 'about' ? 'active' : ''}
          onClick={() => onNavClick('about')}
        >
          About Me
        </li>
        <li
          className={currentSection === 'portfolio' ? 'active' : ''}
          onClick={() => onNavClick('portfolio')}
        >
          Portfolio
        </li>
        <li
          className={currentSection === 'contact' ? 'active' : ''}
          onClick={() => onNavClick('contact')}
        >
          Contact
        </li>
        <li
          className={currentSection === 'resume' ? 'active' : ''}
          onClick={() => onNavClick('resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
