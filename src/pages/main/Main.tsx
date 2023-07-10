import React from 'react';
import '../../../dist/css/main.css';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import MotionImage from '../../components/motionImage/MotionImage';

const HEADLINE_TEXT = 'Not Your Average1Software Engineer';

function Main() {
  const headlineLetters = HEADLINE_TEXT.split('').map((letter, index) => {
    const animationDelay = index * 0.05;
    if (letter === '1') {
      return ' ';
    }
    const isMarker = index > HEADLINE_TEXT.indexOf('1');
    const addMarkerClass = isMarker ? 'marker' : '';
    return (
      <span
        key={letter + String(index)}
        className={`fade-in-letter ${addMarkerClass}`}
        style={{ animationDelay: `${animationDelay}s` }}
      >
        {letter}
      </span>
    );
  });

  return (
    <div className="header">
      <MotionImage />
      <div className="header-content-container">
        <h1 className="header-title">{headlineLetters}</h1>
        <p className="header-subtitle fade-in-subtitle">
          Fullstack developer with a flair for writing elegant solutions and
          thinking outside of the box
        </p>
        <button type="button" className="header-button slide-in-button">
          <p className="header-button-text">Download CV</p>
        </button>
        <section className="header-icons-container fade-in-subtitle">
          <a
            href="https://github.com/yuvaltwina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="header-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yuval-twina-b94243264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="header-icon" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Main;
