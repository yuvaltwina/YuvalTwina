import React from 'react';
import '../../utils/css/projectModal.min.css';
import { Modal } from '@mui/material';
import { RiCloseFill } from 'react-icons/ri';
import { PROJECTS_INFORMATION } from '../../utils/consts';
import { TprojectsInformation } from '../../utils/types';

type Tprop = {
  modalTitle: string;
  setModalTitle: React.Dispatch<React.SetStateAction<string>>;
};

function ProjectModal({ modalTitle, setModalTitle }: Tprop) {
  const { about, description, technologies, websiteUrl } =
    PROJECTS_INFORMATION[modalTitle as keyof TprojectsInformation];
  const displayDescription = description.map((text) => {
    return (
      <li key={text}>
        <p>{text}</p>
      </li>
    );
  });
  const spartedTechnologies = technologies.join(' | ');

  const imageSource = `src\\utils\\images\\width${modalTitle}.png`;
  return (
    <Modal
      open={!!modalTitle}
      onClose={() => {
        setModalTitle('');
      }}
      className="modal-container"
    >
      <div className="modal">
        <img className="modal-image" src={imageSource} alt={modalTitle} />
        <RiCloseFill
          className="modal-exit-icon"
          onClick={() => {
            setModalTitle('');
          }}
        />
        <section className="modal-information">
          <h1>{modalTitle}</h1>
          <p className="modal-about">{about}</p>
          <h3>Description : </h3>
          <ul className="modal-description">{displayDescription}</ul>
          <h3>Technologies : </h3>
          <span className="modal-technologies">{spartedTechnologies}</span>
        </section>
        <button
          type="button"
          className="modal-website-button"
          onClick={() => {
            window.open(websiteUrl, '_blank');
          }}
        >
          Take Me There
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;
