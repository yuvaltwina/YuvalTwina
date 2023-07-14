import React from 'react';
import '../../utils/css/footer.min.css';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GITHUB_LINK, LINKEDIN_LINK } from '../../utils/consts';

const MY_EMAIL = 'YuvalTwina2@gmail.com';
const MY_NUMBER = '058-523-5455';

function Footer() {
  return (
    <div className="footer">
      <h1>{MY_EMAIL}</h1>
      <p>{MY_NUMBER}</p>
      <span className="footer-icons-container">
        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub className="footer-icon" />
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="footer-icon" />
        </a>
      </span>
    </div>
  );
}

export default Footer;
