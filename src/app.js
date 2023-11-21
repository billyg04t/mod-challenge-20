import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header />
      <Navigation currentSection={currentSection} onNavClick={handleNavClick} />
      {currentSection === 'about' && <AboutMe />}
      {currentSection === 'portfolio' && <Portfolio />}
      {currentSection === 'contact' && <Contact />}
      {currentSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
};

export default App;
