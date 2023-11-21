import React from 'react';
import './Header.css';

const Header = ({ currentSection, onNavClick }) => {
  return (
    <header>
      <div className="logo">Your Logo</div>
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
    </header>
  );
};

export default Header;
