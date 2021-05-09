import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div id="footer-icons">
        <a className="f-icon" href="https://github.com/msanaya" target="_blank" rel="noreferrer">
          <img src="iconGithub.png" alt="Github Link" /> </a>
        <a className="f-icon" href="https://www.instagram.com/thecodingmomma/" target="_blank" rel="noreferrer">
          <img src="iconInstagram.png" alt="Github Link" /> </a>
        <a className="f-icon" href="https://www.linkedin.com/in/pilarbarker/" target="_blank" rel="noreferrer">
          <img src="iconLinkedin.png" alt="Github Link" /> </a>
      </div>
      <div className="f-title">
        <p id="footer-tile">MADE WITH LOVE<span aria-label="heart" role="img"> ❤️ </span>BY PILAR BARKER</p>
      </div>

    </div>
  );
};

export default Footer;