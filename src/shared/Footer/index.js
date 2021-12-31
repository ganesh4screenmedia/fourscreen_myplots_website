/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './footer.css';

const Footer = function ({ onContactUs, onPrivacy, onTerms }) {
  return (
    <div className="footer">
      <p>Copyrights @2021. All rights reserved</p>
      <span className="contact-us" onClick={onContactUs}>
        Contact us
      </span>
      |
      <span className="contact-us" onClick={onPrivacy}>
        Privacy policy
      </span>
      |
      <span className="contact-us" onClick={onTerms}>
        Terms of use
      </span>
    </div>
  );
};

export default Footer;
