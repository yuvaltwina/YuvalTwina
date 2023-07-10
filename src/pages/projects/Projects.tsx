import React from 'react';
import '../../../dist/css/projects.css';
import { GiQueenCrown } from 'react-icons/gi';

const TITLE_TEXT = 'My Recent Work';
const SUBTITLE_TEXT = "Here are a few past projects I've worked on";
const projectsInfo = [
  {
    title: 'Psychologist',
  },
  {
    title: 'Pawtner',
  },
  {
    title: 'GlobalWeather',
  },
];

function Projects() {
  const displayProjects = projectsInfo.map(({ title }) => {
    let isSpecialProject = false;
    if (title === 'Pawtner') {
      isSpecialProject = true;
    }
    const displayCrown = isSpecialProject && (
      <GiQueenCrown className="project-crown" />
    );
    return (
      <span key={title} className={`projects-card projects-${title}`}>
        {displayCrown}
        <span className="projects-card-hover">
          <h1>{title}</h1>
          <p>website</p>
        </span>
      </span>
    );
  });
  return (
    <div className="projects">
      <section className="projects-header">
        <h1>{TITLE_TEXT}</h1>
        <p>{SUBTITLE_TEXT}</p>
      </section>
      <section className="projects-cards-container">{displayProjects}</section>
    </div>
  );
}

export default Projects;
