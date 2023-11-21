import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <img src="/github-icon.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
