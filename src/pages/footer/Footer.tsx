import React from 'react';
import '../../../dist/css/footer.css';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

function Footer() {
  return (
    <div className="footer">
      <h1>YuvalTwina2@gmail.com</h1>
      <p>058-523-5455</p>
      <span className="footer-icons-container">
        <a
          href="https://github.com/yuvaltwina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuval-twina-b94243264"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="footer-icon" />
        </a>
      </span>
    </div>
  );
}

export default Footer;
