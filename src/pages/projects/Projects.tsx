import React from 'react';
import '../../../dist/css/projects.css';

const TITLE_TEXT = 'Recent Work';
const SUBTITLE_TEXT = 'Projects';
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
    return (
      <span key={title} className={`projects-card projects-${title}`}>
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
