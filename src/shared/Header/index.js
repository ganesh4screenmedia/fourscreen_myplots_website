/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import AppIcon from '../../assests/images/appIcon.svg';

const Header = function () {
  const navigate = useNavigate();

  const onIconClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div onClick={onIconClick}>
        <img src={AppIcon} alt="app_icon" width="50px" height="50px" />
      </div>
    </div>
  );
};

export default Header;
