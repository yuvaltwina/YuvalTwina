import React, { useState } from 'react';
import '../../utils/css/projects.min.css';
import ProjectModal from '../../components/modal/ProjectModal';
import { PROJECTS_INFORMATION, PROJECTS_TITELS } from '../../utils/consts';
import { TprojectsInformation } from '../../utils/types';

const TITLE_TEXT = 'Recent Work';
const SUBTITLE_TEXT = 'Projects';

function Projects() {
  const [modalTitle, setModalTitle] = useState('');
  const displayProjects = PROJECTS_TITELS.map((title: string) => {
    return (
      <button
        type="button"
        key={title}
        className={`projects-card projects-${title}`}
        onClick={() => {
          setModalTitle(title);
        }}
      >
        <span className="projects-card-hover">
          <h1>{title}</h1>
          <p>
            {PROJECTS_INFORMATION[title as keyof TprojectsInformation].subTitle}
          </p>
        </span>
      </button>
    );
  });
  return (
    <>
      {modalTitle && (
        <ProjectModal modalTitle={modalTitle} setModalTitle={setModalTitle} />
      )}
      <div className="projects">
        <section className="projects-header">
          <h1>{TITLE_TEXT}</h1>
          <p>{SUBTITLE_TEXT}</p>
        </section>
        <section className="projects-cards-container">
          {displayProjects}
        </section>
      </div>
    </>
  );
}

export default Projects;
