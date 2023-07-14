import React, { useEffect, useState } from 'react';
import '../../../dist/css/navbar.css';
import Hamburger from '../hamburger/Hamburger';
import { TrefList } from '../../utils/types';

type Tprops = {
  refList: TrefList;
};

function Navbar({ refList }: Tprops) {
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

  const scrollTo = (title: keyof TrefList) => {
    const selectedRef = refList[title];
    if (selectedRef) {
      selectedRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linksList = [
    { text: 'Home', clickHandler: scrollTo },
    { text: 'About', clickHandler: scrollTo },
    { text: 'Projects', clickHandler: scrollTo },
  ];

  const displayLinks = linksList.map(({ text, clickHandler }) => {
    return (
      <button
        type="button"
        key={text}
        className="navbar-link"
        onClick={() => clickHandler(text as keyof TrefList)}
      >
        {text}
      </button>
    );
  });
  return (
    <div className={`navbar ${navbarClass}`}>
      <section className="navbar-links-container">{displayLinks}</section>
      <span className="navbar-hamburger-container">
        <Hamburger
          linksList={[
            ...linksList,
            { text: 'Contact', clickHandler: scrollTo },
          ]}
        />
      </span>
      <button
        type="button"
        className="btn41-43 btn-41"
        onClick={() => {
          scrollTo('Contact');
        }}
      >
        Contact Me
      </button>
    </div>
  );
}

export default Navbar;
