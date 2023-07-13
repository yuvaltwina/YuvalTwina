import React from 'react';
import '../../../dist/css/home.css';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import MotionImage from '../../components/motionImage/MotionImage';
import { GITHUB_LINK, LINKEDIN_LINK } from '../../utils/consts';

const TITLE_TEXT = 'Not Your Average1Software Engineer';
const SUBTITLE_TEXT =
  'Fullstack developer with a flair for writing elegant solutions and thinking outside of the box';
const CV_BUTTON_TEXT = 'Download CV';

function Home() {
  const headlineLetters = TITLE_TEXT.split('').map((letter, index) => {
    const animationDelay = index * 0.05;
    if (letter === '1') {
      return ' ';
    }
    const isMarker = index > TITLE_TEXT.indexOf('1');
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
        <p className="header-subtitle fade-in-subtitle">{SUBTITLE_TEXT}</p>
        <button type="button" className="header-button slide-in-button">
          <p className="header-button-text">{CV_BUTTON_TEXT}</p>
        </button>
        <section className="header-icons-container fade-in-subtitle">
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub className="header-icon" />
          </a>
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="header-icon" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Home;
