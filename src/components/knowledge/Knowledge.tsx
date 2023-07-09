import React from 'react';
import '../../../dist/css/knowledge.css';
import { FaReact, FaSass } from 'react-icons/fa';
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFigma,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiMui, SiExpress } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';

import { CARDS_INFORMATION } from '../../utils/consts';

const ICON_LIST = [
  { IconComponent: BiLogoTypescript, text: 'Typescrpit' },
  { IconComponent: BiLogoJavascript, text: 'Javascript' },
  { IconComponent: FaReact, text: 'React' },
  { IconComponent: FaSass, text: 'Sass' },
  { IconComponent: DiCss3, text: 'Css' },
  { IconComponent: BiLogoFigma, text: 'Figma' },
  { IconComponent: SiMui, text: 'Matirialui' },
  { IconComponent: AiFillGithub, text: 'Github' },
  { IconComponent: BsGit, text: 'Git' },
  { IconComponent: BiLogoNodejs, text: 'Nodejs' },
  { IconComponent: SiExpress, text: 'Express' },
  { IconComponent: BiLogoMongodb, text: 'Mongodb' },
];
function Knowledge() {
  const displayCards = CARDS_INFORMATION.map((card) => {
    const { title, text, technologies } = card;
    const technologiesString = technologies.join(' | ');
    return (
      <div key={title} className="knowledge-card">
        <h1 className="knowledge-card-title">{title}</h1>
        <p className="knowledge-card-text">{text}</p>
        <p className="knowledge-card-tech">{technologiesString}</p>
      </div>
    );
  });

  const displayIcons = ICON_LIST.map(({ IconComponent, text }) => {
    return (
      <span className="knowledge-icon" key={text}>
        <span className="knowledge-icon-hover">{text}</span>
        <IconComponent />
      </span>
    );
  });

  return (
    <div className="knowledge">
      <div className="knowledge-content">
        <section className="knowledge-left-side">{displayCards}</section>
        <section className="knowledge-right-side">
          <div className="knowledge-icons-container"> {displayIcons} </div>
        </section>
      </div>
    </div>
  );
}

export default Knowledge;
