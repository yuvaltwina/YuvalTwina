import React from 'react';
import '../../../dist/css/projectModal.css';
import { Modal } from '@mui/material';
import { PROJECTS_INFORMATION } from '../../utils/consts';
import { TprojectsInformation } from '../../utils/types';

type Tprop = {
  modalTitle: string;
  setModalTitle: React.Dispatch<React.SetStateAction<string>>;
};
function ProjectModal({ modalTitle, setModalTitle }: Tprop) {
  const { about, description, technologies } =
    PROJECTS_INFORMATION[modalTitle as keyof TprojectsInformation];
  const displayDescription = description.map((text) => {
    return <p key={text}>{text}</p>;
  });
  const displayTechnologies = technologies.map((technologie) => {
    return <p key={technologie}>{technologie}</p>;
  });
  return (
    <Modal
      open={!!modalTitle}
      onClose={() => {
        setModalTitle('');
      }}
      className="modal-container"
    >
      <div className="modal">
        <span className="modal-image">image</span>
        <section className="modal-information">
          <h1>{modalTitle}</h1>
          <p>{about}</p>
          <h3>Description : </h3>
          <span>{displayDescription}</span>
          <h3>Technologies : </h3>
          <span>{displayTechnologies}</span>
        </section>
      </div>
    </Modal>
  );
}

export default ProjectModal;
