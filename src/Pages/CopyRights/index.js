import React from 'react';
import {
  connectExplanation,
  experinceExplanation,
  planExplanation,
  plotExplanation,
} from '../../Constants';
import './copyRights.css';
import plotImage from '../../assests/images/plotMap.png';
import planPlot from '../../assests/images/planPlot.png';
import connect from '../../assests/images/connect.png';
import experince from '../../assests/images/experince.png';
import QR from '../../assests/images/QR.png';

const CopyRight = function () {
  return (
    <div className="main_container">
      <div>
        <div className="content_container">
          <div className="plan_a_plot_container">
            <div className="text_container">
              <span className="heading"> Plan a plot </span>
              <span className="heading">Go to a plot</span>
              <span className="explanation">{plotExplanation}</span>
            </div>
            <img src={plotImage} alt="plot" className="plot_image" />
          </div>
          <div className="discover_heading_container">
            <span className="discover_heading">Discover events, parties and people</span>
          </div>
          <div className="plan_a_plot_container">
            <div className="plan_container">
              <img src={planPlot} alt="plan" />
              <span className="conatainer_heading">Plan</span>
              <span className="conatainer_explanation">{planExplanation}</span>
            </div>
            <div className="connect_container">
              <img src={connect} alt="connect" />
              <span className="conatainer_heading" style={{ color: '#FFFFFF' }}>
                Connect
              </span>
              <span className="conatainer_explanation" style={{ color: '#FFFFFF' }}>
                {connectExplanation}
              </span>
            </div>
            <div className="experince_container">
              <img src={experince} alt="experince" />
              <span className="conatainer_heading">Experience</span>
              <span className="conatainer_explanation">{experinceExplanation}</span>
            </div>
          </div>
          <div className="discover_heading_container">
            <span className="discover_heading">Scan to plot</span>
            <span style={{ fontSize: '10px', marginTop: '20px', color: '#000000' }}>
              The QR code will take you right to the app store where you can get the MyPlots app for
              free.
            </span>
          </div>
          <div className="qr_container">
            <img src={QR} alt="QR" />
          </div>
        </div>
        <div className="footer">
          <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
            Copyrights @2021. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
