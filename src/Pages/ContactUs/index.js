import React, { useEffect, useState } from 'react';
import Form from '../../shared/ContactUsForm';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import './contactUs.css';

const ContactUs = function () {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ height }} className="contact-us-main-container">
        <div style={{ height: height - 60 }} className="form-main-container">
          <div style={{ width: width < 600 ? '300px' : '600px' }} className="form-container">
            <Form handleOnClose={() => {}} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
