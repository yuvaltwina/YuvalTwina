import React from 'react';
import '../../../dist/css/about.css';
import { CARDS_INFORMATION } from '../../utils/consts';

const TITLE_TEXT = 'Hi, I’m Yuval. Nice to meet you.';
const SUBTITLE_TEXT =
  "Since beginning my journey as a full-stack developer, I've been passionate about creating innovative and user-friendly web applications. With expertise in both front-end and back-end development, I strive to deliver clean and high-quality code, ensuring seamless experiences for users. I'm excited to contribute to impactful projects and exceed client expectations.";
function About() {
  const displayCards = CARDS_INFORMATION.map(
    ({ title, text, technologies, IconCompononet }) => {
      const displayTechnologies = technologies.map((tech) => {
        return <p key={tech}>{tech}</p>;
      });

      return (
        <div className="about-card" key={title}>
          <span className="about-card-icon">
            <IconCompononet />
          </span>
          <h1>{title}</h1>
          <p>{text}.</p>
          <h3>Technologies</h3>
          <section className="about-card-tech">{displayTechnologies}</section>
        </div>
      );
    }
  );
  return (
    <div className="about">
      <section className="about-header">
        <div className="about-header-text">
          <h1>{TITLE_TEXT}</h1>
          <p>{SUBTITLE_TEXT}</p>
        </div>
      </section>
      <section className="about-cards-container">{displayCards}</section>
    </div>
  );
}

export default About;
