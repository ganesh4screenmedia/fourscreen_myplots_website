/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {
  connectExplanation,
  experinceExplanation,
  planExplanation,
  plotExplanation,
  qrLink,
} from '../../Constants';
import './copyRights.css';
import plotImage from '../../assests/images/plotMap.svg';
import planPlot from '../../assests/images/planPlot.png';
import connect from '../../assests/images/connect.png';
import experince from '../../assests/images/experince.png';
import QR from '../../assests/images/QR.svg';
import CustomModal from '../../Components/CustomModal';
import Form from './form';

const CopyRight = function () {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const onContactUs = () => {
    setOpen(true);
  };

  const onTerms = () => {
    navigate("/Terms")
  };

  const onPrivacy = () => {
    navigate("/Privacy")
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="main-container">
        <div className="row" style={{ padding: 10 }}>
          <div className="col-1 col-s-1">
            <h1>Plan a plot</h1>
            <h1>Go to a plot</h1>
            <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{plotExplanation}</p>
          </div>

          <div className="col-3 col-s-I">
            <div className="side-image">
              <img src={plotImage} alt="plot" width="310" height="378" />
            </div>
          </div>
        </div>
        <div className="discover-header">
          <h1>Discover events, parties and people</h1>
        </div>
        <div className="row" style={{ padding: '50px' }}>
          <div className="col-2 col-s-2 menu">
            <div className="image">
              <img src={planPlot} alt="plan" />
            </div>
            <div style={{ padding: '5px' }} className="image">
              <h3>Plan</h3>
            </div>
            <div className="explanation">
              <p>{planExplanation}</p>
            </div>
          </div>
          <div className="col-2 col-s-2 menu">
            <div className="image">
              <img src={connect} alt="plan" />
            </div>
            <div style={{ padding: '5px' }} className="image">
              <h3>Connect</h3>
            </div>
            <div className="explanation">
              <p>{connectExplanation}</p>
            </div>
          </div>
          <div className="col-2 col-s-2 menu">
            <div className="image">
              <img src={experince} alt="plan" />
            </div>
            <div style={{ padding: '5px' }} className="image">
              <h3>Experience</h3>
            </div>
            <div className="explanation">
              <p>{experinceExplanation}</p>
            </div>
          </div>
        </div>
        <div className="scan-plot">
          <h1>Scan to plot</h1>
          <p>
            The QR code will take you right to the app store where you can get the MyPlots app for
            free.
          </p>
        </div>
        <div className='image' >
          <img src={QR} alt="QR" width="336" height="494" />
          <div className='qr-scanner-container'>
            <img src={qrLink} alt='qr_Code'/>
          </div>
        </div>
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
      </div>
      <CustomModal
        open={open}
        modalHeight="400px"
        modalWidth={width < 600 ? '300px' : '600px'}
        left='50%'
        onClose={onClose}
      >
        <Form handleOnClose={onClose} />
      </CustomModal>
    </div>
  );
};

export default CopyRight;
