import React from 'react';
import '../../../dist/css/projects.css';
import { GiQueenCrown } from 'react-icons/gi';

const projectsInfo = [
  {
    title: 'Psychologist',
    image: '',
    text: '',
  },
  {
    title: 'Pawtner',
    image: '',
    text: '',
  },
  {
    title: 'GlobalWeather',
    image: '',
    text: '',
  },
];

function Projects() {
  const displayProjects = projectsInfo.map(({ title, image, text }) => {
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
      </span>
    );
  });
  return (
    <div className="projects">
      <section className="projects-cards-container">{displayProjects}</section>
    </div>
  );
}

export default Projects;
