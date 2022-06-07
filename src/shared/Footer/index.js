/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = function () {
  const navigate = useNavigate();

  const onContactUs = () => {
    navigate('/Contact');
  };

  const onTerms = () => {
    navigate('/Terms');
  };

  const onPrivacy = () => {
    navigate('/Privacy');
  };
  const onAdminLogin = () => {
    navigate('/AdminLogin');
  };

  return (
    <div className="footer">
      <p >Copyright @2022. All rights reserved</p>
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
      |
      <span className="contact-us" onClick={onAdminLogin}>
        Admin Login
      </span>
    </div>
  );
};

export default Footer;
