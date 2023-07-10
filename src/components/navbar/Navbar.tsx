import React, { useEffect, useState } from 'react';
import '../../../dist/css/navbar.css';
import Hamburger from '../hamburger/Hamburger';

function Navbar() {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector('.about');
      if (firstSection) {
        const { top } = firstSection.getBoundingClientRect();
        if (top >= 50 && navbarClass === 'navbar-scrolled') {
          setNavbarClass('');
        }
        if (top < 50 && navbarClass !== 'navbar-scrolled') {
          setNavbarClass('navbar-scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarClass]);
  const linksList = [
    { text: 'Home', active: () => {} },
    { text: 'Skills', active: () => {} },
    { text: 'Projects', active: () => {} },
  ];
  const displayLinks = linksList.map(({ text, active }) => {
    return (
      <button type="button" key={text} className="navbar-link" onClick={active}>
        {text}
      </button>
    );
  });
  return (
    <div className={`navbar slide-in-navbar ${navbarClass}`}>
      <section className="navbar-links-container">{displayLinks}</section>
      <span className="navbar-hamburger-container">
        <Hamburger />
      </span>
      <button type="button" className="navbar-contact">
        Contact Me
      </button>
    </div>
  );
}

export default Navbar;
